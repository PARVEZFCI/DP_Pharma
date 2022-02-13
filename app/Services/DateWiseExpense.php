<?php

namespace App\Services;

use App\Models\Expense;
use App\Models\Transaction;
use App\Services\GetDateRange;

class DateWiseExpense extends GetDateRange
{
    public function getExpenseReport($account)
    {
        $expenses = Expense::with("account", "invoiceBase")
            ->whereBetween("date", [$this->from, $this->to])
            ->when($account, function ($q) use ($account) {
                $q->where('account_id', $account);
            })
            ->get()->map(function ($data) {
                return [
                    "head"      => $data->type,
                    "invoice"   => $data->invoiceBase->code,
                    "account"   => $data->account->name,
                    "amount"    => $data->amount,
                    "date"      => $data->date,
                ];
            })->toArray();

        $transaction = Transaction::with("transactionHead", "account")
            ->where("trx_type", 'PAYING')
            ->when($account, function ($q) use ($account) {
                $q->where('account_id', $account);
            })
            ->whereBetween("date", [$this->from, $this->to])
            ->get()->map(function ($data) {
                return [
                    "head"      => $data->transactionHead->name,
                    "invoice"   => $data->id,
                    "account"   => $data->account->name,
                    "amount"    => $data->amount,
                    "date"      => $data->date
                ];
            })->toArray();

        $data['dateWise'] = $allExpense = collect($expenses)->merge($transaction)->sortBy("date");
        $data['amount'] = collect($allExpense)->sum('amount');
        return $data;
    }
}
