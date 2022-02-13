<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Medicine;
use Illuminate\Http\Request;
use App\Models\MedicinePrice;
use App\Models\OrderBaseInfo;
use Illuminate\Http\Response;
use App\Services\PrintService;
use App\Models\OrderMedicineInfo;
use App\Models\StockSaleProductInfo;
use App\Services\OrderList;

class InvoiceController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $dateRange = new OrderList();
        $dateRange->getDateRange($request->type, $request->from, $request->to);

        return response()->json($dateRange->getOrderList($request->customer_type, "paginate"), 200);
    }

    public function invoice($id)
    {
        $print = new PrintService();
        $invoice = $print->getInvoice($id);
        return response()->json($invoice, 200);
    }

    public function view($id)
    {
        $print = new PrintService();
        $invoice['infos'] = $print->getInvoice($id);
        $invoice['stock'] = StockSaleProductInfo::whereIn('medicine_id', $invoice['infos']['medicine_id'])
            ->get();
        return response()->json($invoice, 200);
    }

    public function medicineInfo($id, Request $request)
    {
        $info = OrderMedicineInfo::findOrFail($id);
        $info->quantity = $request->medicine_quantity;
        $info->sub_total = $request->medicine_quantity * $request->discount_price;
        $info->batch = $request->batch;
        $info->save();

        $base = OrderBaseInfo::findOrFail($info->order_id);
        $exceptPrice = OrderMedicineInfo::where('order_id', $base->id)->where('id', '!=', $id)->sum('sub_total');
        $base->total_price = $info->sub_total + $exceptPrice;
        $base->total_due = $base->total_price - $base->total_paid;
        $base->save();
        return response()->json(["Order Edited Successfully", 200]);
    }

    public function changeStatus($id, $status)
    {
        try {
            $order = OrderBaseInfo::findOrFail($id);
            $order->status = $status;
            $order->save();
            if ($status == "4") {
                $medicines = OrderMedicineInfo::where('order_id', $id)->get();
                $pupq = 1;
                foreach ($medicines as $value) {
                    if ($value['unit_id']) {
                        $type = MedicinePrice::findOrFail($value['unit_id'])->type;
                        if ($type == 'PRIMARY') {
                            $pupq = Medicine::findOrFail($value['medicine_id'])->conversion_factor;
                        } else {
                            $pupq = 1;
                        }
                    }
                    $stockInfo = StockSaleProductInfo::where('medicine_id', $value->medicine_id)
                        ->where('batch', ($value->batch ?? 'DEFAULT'))->first();
                    if ($stockInfo) {
                        $stockInfo->stock = $stockInfo->stock - ($value->quantity * $pupq);
                        $stockInfo->sale = $stockInfo->sale + ($value->quantity * $pupq);
                        $stockInfo->save();
                    }
                }
            }

            return $this->successResponse($order, "Status Changed Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
