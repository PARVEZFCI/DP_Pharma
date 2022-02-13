<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Models\CompanyDetails;
use App\Http\Controllers\Controller;

class PrivacyPolicyController extends Controller
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
        return view('layouts.frontend.privacy_policy', compact('settings'));
    }
}
