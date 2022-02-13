<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    public function index() {
    	return view('layouts.frontend.home');
    }

    public function showRegisterForm() {
        if(Auth::guard('customer')->check()) {
            return redirect('/');
        } else {
            return view('layouts.frontend.auth.register');
        }
    }

    public function showLoginForm() {
        if(Auth::guard('customer')->check()) {
            return redirect('/');
        } else {
            return view('layouts.frontend.auth.login');
        }
    }
}
