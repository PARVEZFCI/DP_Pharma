<?php

namespace App\Services;

use App\Models\SellDetailInfo;
use App\Services\GetDateRange;

class DateWiseSale extends GetDateRange
{
    public function getSaleReport()
    {
        $product = SellDetailInfo::with("product")
            ->whereBetween("date", [$this->from, $this->to])
            ->get()->map(function ($data) {
                return [
                    "name" => $data->product ?
                        ($data->product->category
                            ? $data->product->category->code
                            : "") . " " .
                        $data->product->name . " " . $data->product->dosage  : "",
                    "date" => $data->date,
                    "sell" => $data->total_qty,
                    "amount" => $data->total_amount,
                ];
            });
        $data["dateWise"] = $product->toArray();
        $data["amount"] = $product->sum("amount");
        return $data;
    }
}
