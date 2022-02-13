<?php

namespace App\Http\Controllers;

use App\Models\POSCustomer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PosCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $customers = POSCustomer::Search($request->q)->orderBy('id', 'DESC')->paginate($request->row);
        return \response()->json($customers, 200);
    }

    public function allActiveCustomer()
    {
        $activeCustomers = POSCustomer::Active()->orderBy('name', 'ASC')->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->name . '(' . $data->phone . ')',
            ];
        })->toArray();
        return response()->json($activeCustomers, 200);
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
            $posCustomer = new POSCustomer();
            $posCustomer->fill($request->all())->save();
            return $this->successResponse($posCustomer, "Customer Saved Successfully", Response::HTTP_CREATED);
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
            $posCustomer = POSCustomer::findOrFail($id);
            $posCustomer->fill($request->all())->save();
            return $this->successResponse($posCustomer, "Customer Updated Successfully", Response::HTTP_CREATED);
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
            $posCustomer = POSCustomer::findOrFail($id)->delete();
            return $this->successResponse($posCustomer, "Customer Deleted Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $posCustomer = POSCustomer::find($id);
            if ($posCustomer->status == 1) {
                $posCustomer->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $posCustomer->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $posCustomer->save();
            return $this->successResponse($posCustomer, "Customer Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
