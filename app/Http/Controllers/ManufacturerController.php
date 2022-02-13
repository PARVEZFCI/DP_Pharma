<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManufacturerRequest;
use App\Models\Manufacturer;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ManufacturerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $manufacturers = Manufacturer::Search($request->q)->orderBy('id', 'desc')
            ->paginate($request->row);
        return response()->json($manufacturers);
    }

    public function allActiveManufacture(Request $request)
    {
        $manufacturers = Manufacturer::Search($request->search)
            ->Status()->orderBy('manufacture_name', 'ASC')
            ->get()->map(function ($data) {
                return [
                    "value" => $data->id,
                    "text" => $data->manufacture_name
                ];
            })->toArray();
        return response()->json($manufacturers, 200);
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
    public function store(StoreManufacturerRequest $request)
    {

        try {

            $manufacturer = new Manufacturer;
            $manufacturer->fill($request->all())->save();

            return $this->successResponse($manufacturer, "Manufacturer Saved Successfully", Response::HTTP_CREATED);
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
    public function update(StoreManufacturerRequest $request, $id)
    {
        try {
            $manufacturer = Manufacturer::findOrFail($id);
            $manufacturer->fill($request->all())->save();

            return $this->successResponse($manufacturer, "Manufacturer Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $manufacturer = Manufacturer::find($id);
            if ($manufacturer->status == 1) {
                $manufacturer->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $manufacturer->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $manufacturer->save();
            return $this->successResponse($manufacturer, "Manufacturer Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), HTTP_BAD_REQUEST);
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
            $manufacturer = Manufacturer::findOrFail($id);
            $manufacturer->delete();

            return $this->successResponse(null, "Manufacturer Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
