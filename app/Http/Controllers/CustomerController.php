<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\OrderBaseInfo;
use Illuminate\Http\Response;

class CustomerController extends Controller
{

    public function index(Request $request)
    {
        $customer_type = $request->type ?? null;

        $customers = Customer::with('customer_details', 'orders')
            ->Search($request->q)
            ->when($customer_type && $customer_type == 2, function ($query) use ($customer_type) {
                return $query->where('customer_type', $customer_type);
            }, function ($query) use ($customer_type) {
                return $query->where('customer_type', $customer_type);
            })
            ->paginate($request->row);

        return response()->json($customers);
    }

    public function status($id)
    {
        try {
            $customer = Customer::findOrFail($id);
            if ($customer->status == 0) {
                $customer->status = 1;
                $status = Response::HTTP_OK;
            } else {
                $customer->status = 0;
                $status = Response::HTTP_CREATED;
            }
            $customer->save();
            return $this->successResponse($customer, "Customer Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function allActiveCustomer()
    {
        $customers = Customer::with("customer_details")->Active()->orderBy('name', "ASC")->get()->map(function ($data) {
            $customerType = $data->customer_type == 1 ? "RETAILER" : "PATIENT";
            $customerName = $data->customer_details ?
                ($data->customer_details->pharmacy_name ? $data->customer_details->pharmacy_name : $data->name) :
                $data->name;
            return [
                "value" => $data->id,
                "text" => $customerName . " (" . $customerType . ")",
            ];
        })->toArray();
        return response()->json($customers, 200);
    }

    public function show($id)
    {
        $orders = OrderBaseInfo::with(
            'order_medicine_info',
            'order_medicine_info.medicine',
            'order_medicine_info.medicine.category'
        )->where('customer_id', $id)->get();

        $data['dateWise']       = $orders->groupBy('date');
        $data['total_quantity'] = $orders->sum('total_medicine');
        $data['total_amount']   = $orders->sum('total_price');
        $data['total_paid']     = $orders->sum('total_paid');
        $data['total_due']      = $orders->sum('total_due');
        return response()->json($data, 200);
    }
}
