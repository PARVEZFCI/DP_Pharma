<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\CompanyDetails;
use Illuminate\Http\Request;

class TermsConditionController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $settings = CompanyDetails::first();
        return view('layouts.frontend.terms_condition', compact('settings'));
    }
}
