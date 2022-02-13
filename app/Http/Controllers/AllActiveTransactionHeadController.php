<?php

namespace App\Http\Controllers;

use App\Models\TransactionHead;
use Illuminate\Http\Request;

class AllActiveTransactionHeadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $heads = TransactionHead::Active()->orderBy('name', 'ASC')->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->name,
            ];
        })->toArray();
        return response()->json($heads, 200);
    }
}
