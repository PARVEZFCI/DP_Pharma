<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\StockSaleProductInfo;

class StockSaleReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $allData = StockSaleProductInfo::with("medicine")->get()->groupBy('medicine_id')->map(function ($data) {
            // $stock_amount = 0;
            // foreach ($data as $key => $value) {
            //     $stock_amount += $value['stock'] * $value['purchase_price'];
            // }
            return [
                "medicine"     =>
                $data[0]->medicine->name . " " . $data[0]->medicine->dosage,
                "manufacturer" => $data[0]->medicine->manufacturer->manufacture_name,
                "unit"         => isset($data[0]->medicine->prices[1])
                    ? $data[0]->medicine->prices[1]->unit->unit_name
                    : $data[0]->medicine->prices[0]->unit->unit_name,
                "total_stock"  => collect($data)->sum('stock'),
                "total_sale"   => collect($data)->sum('sale'),
            ];
        })->sortBy(["medicine"]);
        return response()->json($allData, 200);
    }
}
