<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\OrderBaseInfo;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\TransactionDetails;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $transactions = Transaction::with(
            'Details',
            'paymentMethod',
            'account',
            'transactionHead'
        )
            ->paginate($request->row);
        return response()->json($transactions, 200);
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
            $transaction = new Transaction();
            $request['date'] = date("y-m-d");
            $request['created_by'] = Auth::id();
            if ($request->trx_type == "RECEIVING") {
                $account = Account::findOrFail($request->account_id);
                $account->balance += $request->amount;
                $account->save();
            } else {
                $account = Account::findOrFail($request->account_id);
                $account->balance -= $request->amount;
                $account->save();
            }
            $transaction->fill($request->all())->save();
            if ($request->patient_id && $request->invoices) {
                $data = [];
                foreach ($request->invoices as $value) {
                    $data[] = [
                        "trx_id" => $transaction->id,
                        "invoice_id" => $value['id'],
                        "date" => date("y-m-d"),
                        "paying" => $value['paying'],
                    ];
                    $order = OrderBaseInfo::findOrFail($value['id']);
                    $order->total_paid += $value['paying'];
                    $order->total_due -= $value['paying'];
                    $order->save();
                }
                TransactionDetails::insert($data);
            }
            return $this->successResponse($transaction, "Transaction Saved Successfully", Response::HTTP_CREATED);
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
        //
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
        //
    }
}
