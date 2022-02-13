<?php

namespace App\Http\Controllers;

use App\Services\PrintService;

class OrderPrintController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($id)
    {
        $print = new PrintService();
        $invoiceData = $print->getInvoice($id);
        // $print->makeReceipt();
        return view("print.orderPos", compact('invoiceData'));
    }
}
