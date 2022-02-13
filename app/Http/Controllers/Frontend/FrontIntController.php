<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Customer;
use App\Models\Medicine;
use Illuminate\Http\Request;
use App\Models\CustomerDetails;
use App\Http\Controllers\Controller;
use App\Http\Resources\MedicineResource;
use Illuminate\Support\Facades\Auth;

class FrontIntController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function init()
    {
        if (Auth::guard('customer')->check()) {
            $login_customer = Auth::guard('customer')->id();
            $customer_info = Customer::join('customer_details', 'customers.id', '=', 'customer_details.customer_id')
                ->select(
                    'customers.*',
                    'customer_details.customer_id',
                    'customer_details.phone',
                    'customer_details.address',
                    'customer_details.pharmacy_name',
                )
                ->where('customers.id', $login_customer)
                ->first();

            return response()->json($customer_info, 200);
        }
    }

    public function front_home(Request $request)
    {
        $company = (array)$request->company;
        $company = array_column($company, 'id');
        $char = $request->alpha ?? null;
        $medicines = Medicine::Relation()
            ->FrontSearch($request->q)
            ->Active()
            ->when($char && $char !== "all", function ($query) use ($char) {
                return $query->where("name", 'LIKE', $char . '%')->orderBy('name')->where('status', 1);
            }, function ($query) {
                return $query->orderBy('name')->where('status', 1);
            })
            ->where(function ($query) use ($company) {
                if ($company) {
                    $query->whereIn('manufacturer_id', $company);
                }
            })
            ->paginate($request->row);

        // return response()->json($medicines, 200);
        return MedicineResource::collection($medicines, 200);
    }
}
