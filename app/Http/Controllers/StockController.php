<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Account;
use App\Models\Expense;
use App\Models\StockExpense;
use Illuminate\Http\Request;
use App\Models\StockBaseInfo;
use Illuminate\Http\Response;
use App\Models\StockProductInfo;
use Illuminate\Support\Facades\DB;
use App\Models\StockSaleProductInfo;
use Illuminate\Support\Facades\Auth;

class StockController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $stocks = StockBaseInfo::Relation()->orderBy('id', 'DESC')->paginate($request->row);
        return \response()->json($stocks, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $requested_data = $request->all();
            $lastId = StockBaseInfo::latest()->first()->id ?? 0;
            $requested_data['code']         = sprintf("#%s-%06d", "INV", ++$lastId);
            $requested_data['date']         = date("y-m-d");
            $requested_data['sub_total']    = $request->total_amount;
            $requested_data['total']        = $request->grand_amount;
            $requested_data['paid']         = $request->paid_amount;
            $requested_data['due']          = $request->due_amount;
            $base = new StockBaseInfo();
            $base->fill($requested_data)->save();
            $data   = [];
            $stock  = [];
            foreach ($request->products as $value) {
                $data[] = [
                    "date"              => $requested_data['date'],
                    "base_id"           => $base->id,
                    "product_id"        => $value['id'],
                    "batch"             => $value['batch'] ?? "DEFAULT",
                    "exp_date"          => $value['exp_date'] ?? date("y-m-d"),
                    "unit_id"           => $value['unit_id'] ?? "",
                    "qty"               => $value['quantity'],
                    "pupq"              => $value['pupq'],
                    "total_qty"         => $value['pupq'] * $value['quantity'],
                    "rate"              => $value['purchase_price'],
                    "discount"          => $value['discount'],
                    "discounted_amount" => $value['discounted_amount'],
                    "vat"               => $value['vat'],
                    "vat_amount"        => $value['vat_amount'],
                    "total_amount"      => $value['sub_total']
                ];
                if (!$value['batch']) {
                    $stock = StockSaleProductInfo::where('medicine_id', $value['id'])
                        ->where('batch', "DEFAULT")->first();
                    if ($stock) {
                        $stock->stock += ($value['quantity'] * $value['pupq']);
                        $stock->stock_count++;
                        $stock->save();
                    } else {
                        StockSaleProductInfo::create([
                            "medicine_id"       => $value['id'],
                            "batch"             => "DEFAULT",
                            "stock"             => ($value['quantity'] * $value['pupq']),
                            "sale"              => 0,
                            "purchase_price"    => $value['purchase_price'],
                            "stock_count"       => 1
                        ]);
                    }
                } else {
                    StockSaleProductInfo::create([
                        "medicine_id"       => $value['id'],
                        "batch"             => $value['batch'],
                        "exp_date"          => $value['exp_date'],
                        "stock"             => $value['quantity'] * $value['pupq'],
                        "sale"              => 0,
                        "purchase_price"    => $value['purchase_price'],
                        "stock_count"       => 1
                    ]);
                }
            }
            StockProductInfo::insert($data);
            StockExpense::create([
                "account_id" => $base->account_id,
                "invoice_id" => $base->id,
                "code"       => $requested_data['code'],
                "date"       => date("y-m-d"),
                "amount"     => $request->paid_amount,
                "serial"     => 1
            ]);
            Expense::create([
                "account_id" => $base->account_id,
                "invoice" => $base->id,
                "type" => "STOCK",
                "date" => date("y-m-d"),
                "amount" => $request->paid_amount
            ]);
            $account = Account::findOrFail($base->account_id);
            $account->balance -= $request->paid_amount;
            $account->save();
            DB::commit();
            return $this->successResponse($base, "Stock Successfully Done", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $details = StockBaseInfo::Relation()->findOrFail($id);
        return \response()->json($details, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $base = StockBaseInfo::findOrFail($id)->delete();
        return $this->successResponse($base, "Stock Deleted Successfully Done", Response::HTTP_OK);
    }
}
