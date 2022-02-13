<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use App\Services\DateWiseIncome;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DateWiseIncomeExport;

class ExportDateWiseIncomeReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateWiseIncome = new DateWiseIncome();
        $dateWiseIncome->getDateRange($request->type, $request->from, $request->to);

        return Excel::download(
            new DateWiseIncomeExport(
                $dateWiseIncome->getIncomeReport($request->account)
            ),
            "report.xlsx"
        );
    }
}
