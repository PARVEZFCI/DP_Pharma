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

class CustomerDuePaymentController extends Controller
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
            // $base = SellBaseInfo::findOrFail($request->id);
            // $base->paid += $request->payment;
            // $base->due -= $request->payment;
            // $base->save();
            $customer = POSCustomer::findOrFail($request->id);
            $customer->balance = $customer->balance - $request->payment;
            $customer->save();
            SellIncome::create([
                "account"     => $request->account_id,
                //"invoice_id"  => $request->id,
                "customer_id" => $customer->id,
               // "code"        => $base->code,
                "date"        => date("y-m-d"),
                "amount"      => $request->payment,
               // "serial"      => (SellIncome::where('invoice_id', $request->id)->latest()->first()->serial ?? 0) + 1,
            ]);
            Income::create([
                "account"     => $request->account_id,
                //"invoice"     => $request->id,
                "type"        => "SELL",
                "date"        => date("y-m-d"),
                "amount"      => $request->payment
            ]);
            if ($request->account_id) {
                $account = Account::findOrFail($request->account_id);
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
            return $this->successResponse($customer, "Payment Successfully Done", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
         
    }
}
