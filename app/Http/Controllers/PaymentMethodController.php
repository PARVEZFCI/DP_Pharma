<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\PaymentMethod;
use Illuminate\Http\Response;

class PaymentMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $methods = PaymentMethod::paginate($request->row);
        return \response()->json($methods);
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

    public function allPaymentMethod()
    {
        $methods = PaymentMethod::Active()->get()->map(function ($data) {
            return [
                "text" => $data->name,
                "value" => $data->id,
            ];
        })->toArray();
        return \response()->json($methods);
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
            $payment_method = new PaymentMethod();
            $payment_method->fill($request->all())->save();
            return $this->successResponse($payment_method, "Category Saved Successfully", Response::HTTP_CREATED);
        } catch (Exception $e) {
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
            $method = PaymentMethod::findOrFail($id);
            $method->fill($request->all())->save();

            return $this->successResponse($method, "Payment Method Update Successfully", Response::HTTP_CREATED);
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
            $method = PaymentMethod::findOrFail($id);
            $method->delete();

            return $this->successResponse(null, "Payment Method Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $method = PaymentMethod::find($id);
            if ($method->status == 1) {
                $method->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $method->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $method->save();
            return $this->successResponse($method, "Payment Method Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
