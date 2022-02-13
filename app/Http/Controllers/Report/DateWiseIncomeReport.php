<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\DateWiseIncome;

class DateWiseIncomeReport extends Controller
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

        return response()->json($dateWiseIncome->getIncomeReport($request->account), 200);
    }
}
