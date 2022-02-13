<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Expense;
use App\Models\AppSetting;
use App\Models\StockExpense;
use Illuminate\Http\Request;
use App\Models\StockBaseInfo;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class StockExpenseController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        try {
            DB::beginTransaction();
            $base = StockBaseInfo::findOrFail($request->id);
            $base->paid += $request->payment;
            $base->due -= $request->payment;
            $base->save();
            StockExpense::create([
                "account_id" => $base->account_id,
                "invoice_id" => $request->id,
                "code"       => $base->code,
                "date"       => date("y-m-d"),
                "amount"     => $request->payment,
                "serial"     => (StockExpense::where('invoice_id', $request->id)->latest()->first()->serial ?? 0) + 1,
            ]);
            Expense::create([
                "account_id" => $base->account_id,
                "invoice"    => $request->id,
                "type"       => "STOCK",
                "date"       => date("y-m-d"),
                "amount"     => $request->payment
            ]);
            $account = Account::findOrFail($base->account_id);
            if ($account) {
                $account->balance -= $request->payment;
                $account->save();
            } else {
                $settings = AppSetting::first();
                $account = Account::findOrFail($settings->account_id);
                $account->balance += $request->payment;
                $account->save();
            }
            DB::commit();
            return $this->successResponse($base, "Payment Successfully Done", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
