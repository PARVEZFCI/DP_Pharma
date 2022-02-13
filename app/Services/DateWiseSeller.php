<?php

namespace App\Services;

use App\Models\Income;
use App\Models\Expense;
use App\Models\Transaction;
use App\Services\GetDateRange;

class DateWiseSeller extends GetDateRange
{
    public function getSellerReport($seller, $trx_type)
    {
        //TRX TYPE 1 PAYED EXPENSE
        //TRX TYPE 2 RECEIVED INCOME
        //TRX TYPE 3 PAYED & RECEIVED EXPENSE INCOME

        if ($trx_type == 1 || $trx_type == 3) {
            $expenses = Expense::with("invoiceBase", "invoiceBase.seller")
                ->when($seller, function ($expenseData) use ($seller) {
                    $expenseData->whereHas('invoiceBase', function ($q) use ($seller) {
                        $q->where("created_by", $seller);
                    });
                })
                ->whereBetween("date", [$this->from, $this->to])
                ->get()->map(function ($data) {
                    return [
                        "seller"    => $data->invoiceBase->seller->name,
                        "head"      => $data->type,
                        "invoice"   => $data->invoiceBase->code,
                        "account"   => $data->account->name,
                        "amount"    => '-' . $data->amount,
                        "trx_type"  => "PAYED",
                        "date"      => $data->date,
                    ];
                })->toArray();
        }

        if ($trx_type == 2 || $trx_type == 3) {
            $incomes = Income::with("invoiceBase", "invoiceBase.seller")
                ->when($seller, function ($incomeData) use ($seller) {
                    $incomeData->whereHas('invoiceBase', function ($q) use ($seller) {
                        $q->where("created_by", $seller);
                    });
                })
                ->whereBetween("date", [$this->from, $this->to])
                ->get()->map(function ($data) {
                    return [
                        "seller"    => $data->invoiceBase->seller->name,
                        "head"      => $data->type,
                        "invoice"   => $data->invoiceBase->code,
                        "account"   => $data->account->name,
                        "amount"    => '+' . $data->amount,
                        "trx_type"  => "RECEIVED",
                        "date"      => $data->date,
                    ];
                })->toArray();
        }

        $transaction = Transaction::with("transactionHead", "seller")
            ->when($seller, function ($transactionData) use ($seller) {
                $transactionData->where("created_by", $seller);
            })
            ->whereBetween("date", [$this->from, $this->to])
            ->get()->map(function ($data) {
                if ($data->trx_type == "PAYING") {
                    $amount = '-' . $data->amount;
                } else {
                    $amount = '+' . $data->amount;
                }
                return [
                    "seller"    => $data->seller->name,
                    "head"      => $data->transactionHead->name,
                    "invoice"   => $data->id,
                    "account"   => $data->account->name,
                    "amount"    => $amount,
                    "trx_type"  => $data->trx_type == "PAYING" ? "PAYED" : "RECEIVED",
                    "date"      => $data->date
                ];
            });

        if ($trx_type == 1) {
            $transaction = collect($transaction)->where("trx_type", "PAYED")->all();
            $data['dateWise'] = $allExpenses = collect($transaction)->merge($expenses);
            $data['expense'] = collect($allExpenses)->sum('amount');
        }
        if ($trx_type == 2) {
            $transaction = collect($transaction)->where("trx_type", "RECEIVED")->all();
            $data['dateWise'] = $allIncome = collect($transaction)->merge($incomes);
            $data['income'] = collect($allIncome)->sum('amount');
        }
        if ($trx_type == 3) {
            $data['dateWise'] = $all = collect($transaction)->merge($expenses)->merge($incomes)->toArray();
            $data['expense'] = collect($all)->where("trx_type", "PAYED")->sum('amount');
            $data['income'] = collect($all)->where("trx_type", "RECEIVED")->sum('amount');
        }
        $data['dateWise'] = collect($data['dateWise'])->sortBy("date");
        return $data;
    }
}
