<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Income;
use Exception;
use App\Models\SellBaseInfo;
use App\Models\SellDetailInfo;
use App\Models\SellIncome;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Models\StockSaleProductInfo;
use App\Models\POSCustomer;

class SellController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $sales = SellBaseInfo::Relation()->orderBy('id', 'DESC')->paginate($request->row);
        return \response()->json($sales, 200);
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
        // try {
          
        DB::beginTransaction();
        $requested_data = $request->all();
        $lastId = SellBaseInfo::latest()->first()->id ?? 0;
        $requested_data['date']      = date("y-m-d");
        $requested_data['code']      = sprintf("#%s-%06d", "SELL", ++$lastId);
        $requested_data['sub_total'] = $request->total_amount;
        $requested_data['total']     = $request->grand_amount;
        $requested_data['paid']      = $request->paid_amount;
        $requested_data['due']       = $request->due_amount;
        $requested_data['type']      = "SELL";
        $base = new SellBaseInfo();
        $base->fill($requested_data)->save();
        $data = [];
        foreach ($request->products as $value) {
            $totalStock = ($value['pupq'] * $value['quantity']);
            $data[] = [
                "date"              => $requested_data['date'],
                "base_id"           => $base->id,
                "product_id"        => $value['id'],
                "batch"             => $value['batch'] ?? "",
                "unit_id"           => $value['unit_id'] ?? "",
                "qty"               => $value['quantity'],
                "pupq"              => $value['pupq'],
                "total_qty"         => $totalStock,
                "rate"              => $value['sell_price'],
                "discount"          => $value['discount'],
                "discounted_amount" => $value['discounted_amount'],
                "vat"               => $value['vat'],
                "vat_amount"        => $value['vat_amount'],
                "total_amount"      => $value['sub_total']
            ];

            $stock = StockSaleProductInfo::find($value['batch']);
            $stock->stock -= $totalStock;
            $stock->sale += $totalStock;
            $stock->save();
        }
        SellDetailInfo::insert($data);
        SellIncome::create([
            "account_id"  => $base->account_id,
            "invoice_id"  => $base->id,
            "customer_id" => $request->customer_id,
            "code"        => $requested_data['code'],
            "date"        => date("y-m-d"),
            "amount"      => $request->paid_amount,
            "serial"      => 1,
        ]);
        
        if($request->customer_id){
            $customer_data = POSCustomer::where('id',$request->customer_id)->first();
            POSCustomer::where('id', $request->customer_id)
            ->update(['balance' => $customer_data->balance + $request->due_amount]);
        }

        Income::create([
            "account_id" => $base->account_id,
            "date"       => date("y-m-d"),
            "invoice"    => $base->id,
            "type"       => "POS SELL",
            "amount"     => $request->paid_amount,
        ]);
        $account = Account::findOrFail($request->account_id);
        $account->balance += $request->paid_amount;
        $account->save();
        DB::commit();
        return $this->successResponse($base, "Sell Successfully Done", Response::HTTP_CREATED);
        // } catch (Exception $e) {
        // return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $details = SellBaseInfo::Relation()->findOrFail($id);
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
        $base = SellBaseInfo::findOrFail($id)->delete();
        return $this->successResponse($base, "Sell Deleted Successfully Done", Response::HTTP_OK);
    }
}
