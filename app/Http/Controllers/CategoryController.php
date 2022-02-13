<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\StoreCategoryRequest;

class CategoryController extends Controller
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
        $categories = Category::Search($request->q)->orderBy('category_name', 'ASC')
            ->paginate($request->row);
        return response()->json($categories, 200);
    }

    public function allActiveCategory()
    {
        $activeCategories = Category::Status()
            ->orderBy('category_name', 'ASC')->get()
            ->map(function ($data) {
                return [
                    "value" => $data->id,
                    "text" => $data->category_name
                ];
            })->toArray();
        return response()->json($activeCategories, 200);
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
    public function store(StoreCategoryRequest $request)
    {
        try {
            $category = new Category();
            $category->fill($request->all())->save();

            return $this->successResponse($category, "Category Saved Successfully", Response::HTTP_CREATED);
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
    public function update(StoreCategoryRequest $request, $id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->fill($request->all())->save();

            return $this->successResponse($category, "Category Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $category = Category::find($id);
            if ($category->status == 1) {
                $category->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $category->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $category->save();
            return $this->successResponse($category, "Category Status Change Successfully", $status);
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
            $category = Category::findOrFail($id);
            $category->delete();

            return $this->successResponse(null, "Category Deleted Successfully", Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
