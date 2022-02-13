<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUnitRequest;
use App\Models\Unit;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $units = Unit::Search($request->q)->orderBy('id', 'desc')
            ->paginate($request->row);

        return response()->json($units);
    }

    public function allActiveUnit()
    {
        $units = Unit::Active()->orderBy("unit_name", 'ASC')->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->symbol
            ];
        })->toArray();
        return \response()->json($units, 200);
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
    public function store(StoreUnitRequest $request)
    {
        try {
            $unit = new Unit();
            $unit->fill($request->all())->save();

            return $this->successResponse($unit, "Unit Saved Successfully", Response::HTTP_CREATED);
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
    public function update(StoreUnitRequest $request, $id)
    {
        try {
            $unit = Unit::findOrFail($id);
            $unit->fill($request->all())->save();

            return $this->successResponse($unit, "Unit Updated Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $unit = Unit::find($id);
            if ($unit->status == 1) {
                $unit->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $unit->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $unit->save();
            return $this->successResponse($unit, "Unit Status Change Successfully", $status);
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
            $unit = Unit::findOrFail($id);
            $unit->delete();

            return $this->successResponse(null, "Unit Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
