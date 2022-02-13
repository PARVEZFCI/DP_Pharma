<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Traits\ApiResponse;
use App\Models\Customer;
use App\Models\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Mail;

class PasswordController extends Controller
{
    use ApiResponse;

    public function showResetFrom()
    {
        return view('layouts.frontend.password.reset_password');
    }

    public function sendToken(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        $customer = Customer::whereEmail($request->email)->first();
        if (!$customer) {
            return response()->json(['errors' => 'Sorry! Email does not exit, Try again']);
        } else {

            $request['token'] = Str::random(40);
            $passwordReset = new PasswordReset();
            $save = $passwordReset->fill($request->all())->save();

            $data = [
                'email' => $request->email,
                'token' => $request['token']
            ];

            Mail::send('layouts.frontend.emails.reset_email', $data, function ($message) use ($data) {
                $message->to($data['email'])->subject('Change your password use this token');
            });

            return $this->successResponse($passwordReset, "Successfully email sent, Please check your email", Response::HTTP_CREATED);
        }
    }

    public function validateToken(Request $request)
    {
        $passwordReset = PasswordReset::whereToken($request->token)->first();

        if (!isset($passwordReset->email)) {
            return response()->json(['error' => "Invalid token"], 401);
        }

        $customer = Customer::whereEmail($passwordReset->email)->first();
        return response()->json($customer, 200);
    }

    public function resetPassword(Request $request)
    {
        $validated = $request->validate([
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required|min:8',
        ]);

        $customer = Customer::find($request->customer_id);

        $passwordReset = PasswordReset::whereEmail($customer->email)->first();
        $passwordReset->delete();

        $customer->password = Hash::make($request->password);
        $customer->save();
    }
}
