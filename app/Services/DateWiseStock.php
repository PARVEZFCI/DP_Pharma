<?php

namespace App\Services;

use App\Models\StockProductInfo;

class DateWiseStock extends GetDateRange
{
    public function getStockReport()
    {
        $product = StockProductInfo::with("productDetails")
            ->whereBetween("date", [$this->from, $this->to])
            ->get()->map(function ($data) {
                return [
                    "name" => $data->productDetails ?
                        ($data->productDetails->category
                            ? $data->productDetails->category->code
                            : "") . " " .
                        $data->productDetails->name . " " . $data->productDetails->dosage  : "",
                    "date" => $data->date,
                    "stock" => $data->total_qty,
                    "cost" => $data->total_amount,
                ];
            })->sortBy('date');
        $data["dateWise"] = $product->toArray();
        $data["cost"] = $product->sum("cost");
        return $data;
    }
}
