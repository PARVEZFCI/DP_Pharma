<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Expense;
use App\Models\Customer;
use App\Models\Income;
use App\Models\Manufacturer;
use App\Models\Medicine;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\OrderBaseInfo;
use App\Models\SellDetailInfo;
use App\Models\StockProductInfo;
use Illuminate\Support\Facades\DB;
use App\Models\StockSaleProductInfo;

class DashboardController extends Controller
{
    protected $colors = [
        '#B34D4D', '#99FF99', '#999966', '#3366E6',
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99',
        '#00B3E6', '#E6B333', '#01796F', '#555555',
        '#FFFF00', '#8F00FF', '#008080', '#C0C0C0',
        '#FFD1DC', '#2A52BE', '#BD33A4', '#A1CAF1'
    ];
    protected $from;
    protected $to;

    public function __construct()
    {
        $this->from = Carbon::now()->subDays(29)->toDateString();
        $this->to = Carbon::now()->toDateString();
    }

    public function counter()
    {

        $data['todayStock'] = StockProductInfo::where("date", date("Y-m-d"))->sum('total_qty');
        $data['todaySale'] = SellDetailInfo::where("date", date("Y-m-d"))->sum('total_qty');

        $trx = Transaction::where("date", date("Y-m-d"))->get();
        $expense = Expense::where("date", date("Y-m-d"))->sum("amount");
        $transaction = $trx->where("trx_type", "PAYING")->sum("amount");
        $data['totalExpense'] = $expense + $transaction;
        $transaction = $trx->where("trx_type", "RECEIVING")->sum("amount");
        $income = Income::where("date", date("Y-m-d"))->sum("amount");
        $data['totalIncome'] = $transaction + $income;

        return response()->json($data, 200);
    }

    public function saleState()
    {
        $sale = StockSaleProductInfo::with("medicine")
            ->select(DB::raw("stock_sale_products.*, SUM(sale) AS total_sell"))
            ->where("sale", ">", 0)
            ->groupBy("medicine_id")->get()->map(function ($data) {
                return [
                    "name" => $data->medicine->name,
                    "sell" => $data->total_sell,
                ];
            })->sortByDesc("sell")->take(8);
        $data['sale']  = $sale->pluck("sell");
        $data['labels']  = $sale->pluck("name");
        $data['colors'] = collect($this->colors)->shuffle();
        return response()->json($data, 200);
    }

    public function manufacturerState()
    {
        $manufacturer = Manufacturer::has('stockSupplier')
            ->withCount(['stockSupplier' => function ($q) {
                $q->whereBetween("date", [$this->from, $this->to]);
            }])->having("stock_supplier_count", ">", 0)->get()
            ->sortByDesc("stock_supplier_count")->take(8);
        $data['stock'] = $manufacturer->pluck("stock_supplier_count");
        $data['labels'] = $manufacturer->pluck("manufacture_name");
        $data['colors'] = collect($this->colors)->shuffle();
        return response()->json($data, 200);
    }

    public function incomeState()
    {
        $income = Income::whereBetween("date", [$this->from, $this->to])->sum('amount');
        $posIncome[] = [
            "name" => "POS Income",
            "amount" => $income,
        ];
        $otherIncome = Transaction::with('transactionHead')
            ->select(DB::raw('transactions.*, SUM(amount) AS total_receive'))
            ->where('trx_type', 'RECEIVING')
            ->whereBetween('date', [$this->from, $this->to])
            ->groupBy('head_id')
            ->get()->map(function ($data) {
                return [
                    "name" => $data->transactionHead->name,
                    "amount" => $data->total_receive,
                ];
            })->toArray();
        $allIncome = collect($posIncome)->merge($otherIncome)->sortByDesc('amount')->take(8);
        $data['income'] = $allIncome->pluck("amount");
        $data['labels'] = $allIncome->pluck("name");
        $data['colors'] = collect($this->colors)->shuffle();
        return response()->json($data, 200);
    }

    public function expenseState()
    {
        $expense = Expense::select(DB::raw("expenses.*,SUM(amount) AS total_expense"))
            ->groupBy("date")
            ->orderBy("date", "DESC")
            ->get()->map(function ($data) {
                return [
                    "date" => $data->date,
                    "amount" => $data->total_expense,
                ];
            });
        $transactionExpense = Transaction::select(DB::raw("transactions.*,SUM(amount) total_expense"))
            ->where("trx_type", "PAYING")
            ->groupBy('date')->orderBy("date", "DESC")
            ->get()->map(function ($data) {
                return [
                    "date" => $data->date,
                    "amount" => $data->total_expense,
                ];
            });
        $allExpense = collect($expense)->merge($transactionExpense)
            ->groupBy("date")->map(function ($data, $key) {
                return  [
                    "date" => $key,
                    "amount" => collect($data)->sum("amount"),
                ];
            })->sortByDesc('date')->take(8)->sortBy("date");
        $data['expense'] = $allExpense->pluck("amount");
        $data['labels'] = $allExpense->pluck("date");
        $data['colors'] = collect($this->colors)->shuffle();
        return response()->json($data, 200);
    }
}
