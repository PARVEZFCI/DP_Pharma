<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class PaymentProceedController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if (Auth::guard('customer')->check()) {
            return view('layouts.frontend.payment_proceed');
        } else {
            return redirect('/user-login');
        }
    }
}
