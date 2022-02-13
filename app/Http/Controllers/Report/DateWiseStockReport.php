<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Models\StockProductInfo;
use App\Services\DateWiseStock;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DateWiseStockReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateWiseStock = new DateWiseStock();
        $dateWiseStock->getDateRange($request->type, $request->from, $request->to);
        $reportData = $dateWiseStock->getStockReport();
        return response()->json($reportData, 200);
    }
}
