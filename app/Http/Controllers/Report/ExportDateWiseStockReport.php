<?php

namespace App\Http\Controllers\Report;

use App\Exports\DateWiseStockExport;
use Illuminate\Http\Request;
use App\Services\DateWiseStock;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportDateWiseStockReport extends Controller
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

        return Excel::download(new DateWiseStockExport($reportData), "report.xlsx");
    }
}
