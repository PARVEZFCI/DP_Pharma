<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Services\DateWiseSale;
use Illuminate\Http\Request;

class DateWiseSaleReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateWiseSale = new DateWiseSale();
        $dateWiseSale->getDateRange($request->type, $request->from, $request->to);
        $reportData = $dateWiseSale->getSaleReport();
        return response()->json($reportData, 200);
    }
}
