<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AllActiveSellerController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $seller = User::orderBy("name")->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->name,
            ];
        })->toArray();
        return response()->json($seller, 200);
    }
}
