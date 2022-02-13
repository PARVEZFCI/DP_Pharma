<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Services\DateWiseExpense;
use Illuminate\Http\Request;

class DateWiseExpenseReport extends Controller
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

        return response()->json($dateWiseExpense->getExpenseReport($request->account), 200);
    }
}
