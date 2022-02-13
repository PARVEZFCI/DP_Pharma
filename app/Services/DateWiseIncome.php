<?php

namespace App\Services;

use App\Models\Income;
use App\Models\Transaction;
use App\Services\GetDateRange;

class DateWiseIncome extends GetDateRange
{
    public function getIncomeReport($account)
    {
        $incomes = Income::with("account", "invoiceBase")
            ->when($account, function ($q) use ($account) {
                $q->where('account_id', $account);
            })
            ->whereBetween("date", [$this->from, $this->to])
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
            ->where("trx_type", 'RECEIVING')
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

        $data['dateWise'] = $allIncomes = collect($incomes)->merge($transaction)->sortBy("date");
        $data['amount'] = collect($allIncomes)->sum('amount');
        return $data;
    }
}
