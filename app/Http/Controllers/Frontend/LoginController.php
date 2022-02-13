<?php

namespace App\Http\Controllers\Frontend;

use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use ApiResponse;

    public function login(Request $request)
    {
        $this->validate($request, [
            'username'    => 'required',
            'password' => 'required',
        ]);
        $credentials = [];
        if (is_numeric($request->input('username'))) {
            $credentials['phone'] = $request->input('username');
        } elseif (filter_var($request->input('username'), FILTER_VALIDATE_EMAIL)) {
            $credentials['email'] = $request->input('username');
        }
        $credentials['password'] = $request->input('password');

        $remember = isset($request->remember) ? true : false;
        if (Auth::guard('customer')->attempt($credentials, $remember)) {
            return $this->successResponse(null, "Login Successfully", Response::HTTP_CREATED);
        } else {
            return $this->errorResponse("These credentials do not match our record", 401);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('customer')->logout();
        return redirect("/");
    }
}
