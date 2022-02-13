<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\TransactionHead;

class TransactionHeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $heads = TransactionHead::paginate($request->row);
        return response()->json($heads, 200);
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
            $head = new TransactionHead();
            $head->fill($request->all())->save();
            return $this->successResponse($head, "Transaction Head Saved Successfully", Response::HTTP_CREATED);
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
        try {
            $head = TransactionHead::findOrFail($id);
            $head->fill($request->all())->save();
            return $this->successResponse($head, "Transaction Head Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            TransactionHead::findOrFail($id)->delete();
            return $this->successResponse(null, "Transaction Head Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Status Change Function
     *
     * @param int $id
     * @return mixed
     */
    public function status($id)
    {
        try {
            $head = TransactionHead::findOrFail($id);
            if ($head->status == 0) {
                $head->status = 1;
            } else {
                $head->status = 0;
            }
            $head->save();
            return $this->successResponse($head, "Transaction Head Status Changed Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
