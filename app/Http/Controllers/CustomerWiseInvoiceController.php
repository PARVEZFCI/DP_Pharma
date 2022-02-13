<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\OrderBaseInfo;
use Illuminate\Http\Request;

class CustomerWiseInvoiceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($id)
    {
        $orders = OrderBaseInfo::where("customer_id", $id)->where('total_due', ">", 0)->orderBy("id", "ASC")->get();
        return response()->json($orders, 200);
    }
}
