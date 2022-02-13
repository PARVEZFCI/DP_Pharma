<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGenericRequest;
use App\Models\Generic;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GenericController extends Controller
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
        $generics = Generic::Search($request->q)->orderBy('generic_name', 'ASC')
            ->paginate($request->row);
        return response()->json($generics, 200);
    }

    public function allActiveGeneric()
    {
        $activeGenerics = Generic::Status()->orderBy('generic_name', 'ASC')->get()->map(function ($data) {
            return [
                "value" => $data->id,
                "text" => $data->generic_name
            ];
        })->toArray();
        return response()->json($activeGenerics, 200);
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
    public function store(StoreGenericRequest $request)
    {
        try {
            $generic = new Generic();
            $generic->fill($request->all())->save();

            return $this->successResponse($generic, "Generic Saved Successfully", Response::HTTP_CREATED);
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
    public function update(StoreGenericRequest $request, $id)
    {
        try {
            $generic = Generic::findOrFail($id);
            $generic->fill($request->all())->save();

            return $this->successResponse($generic, "Generic Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $generic = Generic::find($id);
            if ($generic->status == 1) {
                $generic->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $generic->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $generic->save();
            return $this->successResponse($generic, "Generic Status Change Successfully", $status);
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
            $generic = Generic::findOrFail($id);
            $generic->delete();

            return $this->successResponse(null, "Generic Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
