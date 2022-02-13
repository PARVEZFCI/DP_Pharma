<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use App\Services\DateWiseExpense;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DateWiseExpenseExport;

class ExportDateWiseExpenseReport extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dateWiseExpense = new DateWiseExpense();
        $dateWiseExpense->getDateRange($request->type, $request->from, $request->to);

        return Excel::download(
            new DateWiseExpenseExport(
                $dateWiseExpense->getExpenseReport($request->account)
            ),
            "report.xlsx"
        );
    }
}
