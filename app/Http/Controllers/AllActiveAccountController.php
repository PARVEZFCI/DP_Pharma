<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AllActiveAccountController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $activeAccounts = Account::Active()->orderBy('name', 'ASC')->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->name,
            ];
        })->toArray();
        return response()->json($activeAccounts, 200);
    }
}
