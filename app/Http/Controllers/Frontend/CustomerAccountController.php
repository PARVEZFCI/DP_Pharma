<?php

namespace App\Http\Controllers\Frontend;

use App\Helpers\Helper;
use App\Models\Customer;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\OrderBaseInfo;
use Illuminate\Http\Response;
use App\Models\CustomerDetails;
use App\Models\OrderMedicineInfo;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Validator;

class CustomerAccountController extends Controller
{
    use ApiResponse;

    public function __construct()
    {
        $this->middleware('frontLogin');
    }

    public function index()
    {
        return view('layouts.frontend.account.customer_account');
    }

    // Customer all orders get as an array
    public function getOrder(Request $request)
    {
        $id = Auth::guard('customer')->id();

        $orders = OrderBaseInfo::where('customer_id', $id)->orderBy('id', 'DESC')
            ->get()->map(function ($data) {
                return [
                    'id' => $data->id,
                    'order_code' => $data->order_code,
                    'date' => $data->date,
                    'status' => $data->status,
                    'total_price' => $data->total_price,
                    'created_at' => $data->created_at
                ];
            });

        return response()->json($orders);
    }

    // Get all medicines from order
    public function getOrderData($id)
    {
        $orderMedicines = OrderMedicineInfo::with(
            'medicine',
            'medicine.category',
            'order_base_info',
            'unit',
            'unit.unit'
        )->where('order_id', $id)->get();
        return response()->json($orderMedicines);
    }

    // Single medicine id wise update
    public function updateSingleOrder(Request $request, $id)
    {
        try {
            DB::beginTransaction();

            $order_medicine_info = OrderMedicineInfo::findOrFail($id);

            $order_medicine_info->update([
                'quantity' => $request->quantity,
                'sub_total' => $request->sub_total
            ]);

            $get_total_price = OrderMedicineInfo::select(DB::raw("SUM(sub_total) as grand_total"))
                ->where('order_id', $order_medicine_info->order_id)
                ->groupBy(DB::raw("order_id"))
                ->first();

            $order_base_info = OrderBaseInfo::where('id', $order_medicine_info->order_id)->first();
            $order_base_info->update([
                'total_price' => $get_total_price['grand_total'],
                'total_due' => $get_total_price['grand_total'],
            ]);

            DB::commit();
            return response()->json("Your Medicine Successfully Updated", 200);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    //Customer profile update
    public function updateCustomerProfile(Request $request, $id)
    {
        $this->validate($request, [
            'name'    => 'required|min:4',
            'phone'   => 'required|numeric|min:11|digits:11',
            'address' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $requested_data = $request->all();
            $customer_data = Customer::findOrFail($id);
            if ($request->image && $request->image != $customer_data['image']) {
                if ($customer_data['image']) {
                    if (File::exists($customer_data['image'])) {
                        File::delete($customer_data['image']);
                    }
                }

                $position  = strpos($request->image, ";");
                $sub_str   = substr($request->image, 0, $position);
                $extension = explode("/", $sub_str);
                $result    = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "frontend_assets/assets/img/customers/" . time() . ".webp";
                    $resize_img  = Image::make($request->image)->resize(150, 150)->save($upload_path);
                    $requested_data['image'] = $upload_path;
                }
            }
            $customer_data->fill($requested_data)->save();

            $customer_details = CustomerDetails::where('customer_id', $id)->first();
            $customer_details->update([
                'phone'   => $request->phone,
                'address' => $request->address,
            ]);

            DB::commit();
            return $this->successResponse(null, "Profile Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function changePassword(Request $request)
    {
        $input = $request->all();
        $user = Customer::findOrFail(Auth::guard('customer')->user()->id);
        Validator::make($input, [
            'current_password' => ['required', 'string'],
            'password' => 'required|min:4',
        ])->after(function ($validator) use ($user, $input) {
            if (!Hash::check($input['current_password'], $user->password)) {
                $validator->errors()
                    ->add('current_password', __('The provided password does not match your current password.'));
            }
        });

        $user->forceFill([
            'password' => Hash::make($input['password']),
        ])->save();
        $response = [
            'status'  => 200,
            'message' => 'Password Changed',
        ];
        return response()->json($response, 200);
    }
}
