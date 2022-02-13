<?php

namespace App\Http\Controllers;

use App\Exports\OrderListExport;
use App\Services\OrderList;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportOrderList extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateRange = new OrderList();
        $dateRange->getDateRange($request->type, $request->from, $request->to);

        return Excel::download(
            new OrderListExport(
                $dateRange->getOrderList(
                    $request->customer_type,
                    "export"
                )
            ),
            "order.xlsx"
        );
    }
}
