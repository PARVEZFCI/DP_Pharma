<?php

namespace App\Http\Controllers\Report;

use App\Exports\DateWiseSellerExport;
use Illuminate\Http\Request;
use App\Services\DateWiseSeller;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportDateWiseSellerReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateWiseSeller = new DateWiseSeller();
        $dateWiseSeller->getDateRange($request->type, $request->from, $request->to);
        $reportData = $dateWiseSeller->getSellerReport($request->seller, $request->trx);
        return Excel::download(new DateWiseSellerExport($reportData), 200);
    }
}
