<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Services\DateWiseSeller;
use Illuminate\Http\Request;

class DateWiseSellerReport extends Controller
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

        return response()->json($dateWiseSeller->getSellerReport($request->seller, $request->trx), 200);
    }
}
