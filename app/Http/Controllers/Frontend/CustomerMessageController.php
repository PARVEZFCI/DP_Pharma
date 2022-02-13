<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMessageRequest;
use App\Models\CustomerMessage;
use Mail;
use App\Mail\CustomerMail;

class CustomerMessageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(StoreMessageRequest $request)
    {
        $message = new CustomerMessage;
        $message->fill($request->all())->save();

        $details = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];

        Mail::to('gamersnab247@gmail.com')->send(new CustomerMail($details));

        return response()->json('Email Send Successfuly', 200);
    }
}
