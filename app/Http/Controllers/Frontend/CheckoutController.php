<?php

namespace App\Http\Controllers\Frontend;

use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\OrderBaseInfo;
use Illuminate\Http\Response;
use App\Models\OrderMedicineInfo;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class CheckoutController extends Controller
{
    use ApiResponse;

    public function __construct()
    {
        $this->middleware('frontLogin');
    }

    public function index()
    {
        return view('layouts.frontend.checkout');
    }

    public function storeCheckout(Request $request)
    {

        $customer_id = Auth::guard('customer')->id();

        DB::beginTransaction();
        $last_orderId = OrderBaseInfo::latest()->first()->id ?? 0;
        $mainOrderID = sprintf("#%06d", ++$last_orderId);

        $order_base_info['order_code'] = $mainOrderID;
        $order_base_info['customer_id'] = $customer_id;
        $order_base_info['date'] = date('Y-m-d');
        $order_base_info['total_medicine'] = $request->total_medicine;
        $order_base_info['total_price'] = $request->total_price;
        $order_base_info['total_paid'] = 0;
        $order_base_info['total_due'] = $request->total_price;
        $order_base = new OrderBaseInfo();
        $order_base->fill($order_base_info)->save();

        $request_cart_orders = $request->cart_data;

        foreach ($request_cart_orders as $key => $value) {
            $data = [];
            $data['order_id'] = $order_base->id;
            $data['medicine_id'] = $value['id'];
            $data['medicine_price'] = $value['price'];
            $data['discount'] = $value['discount'];
            $data['discount_price'] = $value['discount_price'];
            $data['quantity'] = $value['quantity'];
            $data['sub_total'] = ($value['discount_price'] ?? $value['price']) * $value['quantity'];
            $data['unit_id'] = $value['unit_id'];
            OrderMedicineInfo::insert($data);
        }

        DB::commit();

        return $this->successResponse(null, "Order Created Successfully", Response::HTTP_CREATED);
    }
}
