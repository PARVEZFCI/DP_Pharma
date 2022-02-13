<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use App\Services\DateWiseSale;
use App\Exports\DateWiseSaleExport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportDateWiseSaleReport extends Controller
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

        return Excel::download(new DateWiseSaleExport($reportData), "report.xlsx");
    }
}
