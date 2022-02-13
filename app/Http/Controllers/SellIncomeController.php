<?php

namespace App\Http\Controllers;

use App\Models\Income;
use App\Models\Account;
use App\Models\AppSetting;
use App\Models\SellIncome;
use App\Models\SellBaseInfo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Models\POSCustomer;

class SellIncomeController extends Controller
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
            $base = SellBaseInfo::findOrFail($request->id);
            $base->paid += $request->payment;
            $base->due -= $request->payment;
            $base->save();
            $customer = POSCustomer::findOrFail($request->customer_id);
            SellIncome::create([
                "account"     => $base->account_id,
                "invoice_id"  => $request->id,
                "customer_id" => $base->customer_id,
                "code"        => $base->code,
                "date"        => date("y-m-d"),
                "amount"      => $request->payment,
                "serial"      => (SellIncome::where('invoice_id', $request->id)->latest()->first()->serial ?? 0) + 1,
            ]);
            Income::create([
                "account"     => $base->account_id,
                "invoice"     => $request->id,
                "type"        => "SELL",
                "date"        => date("y-m-d"),
                "amount"      => $request->payment
            ]);
            if ($base->account_id) {
                $account = Account::findOrFail($base->account_id);
            }
            if ($account) {
                $account->balance += $request->payment;
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
