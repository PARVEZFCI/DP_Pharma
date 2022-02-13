<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(Slider::orderBy('id', "DESC")->paginate($request->row), 200);
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
            $slider = new Slider();
            $requested_data = $request->all();

            if ($request->path) {
                $img_position = strpos($request->path, ";");
                $sub_str      = substr($request->path, 0, $img_position);
                $extension    = explode("/", $sub_str);
                $result       = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/Slider/slide_" . time() . ".webp";
                    $resize_img  = Image::make($request->path)->resize(1600, 470)->save($upload_path);
                    $requested_data['path'] = $upload_path;
                }
            }

            $slider->fill($requested_data)->save();
            return $this->successResponse(
                $slider,
                "Slider Saved Successfully",
                Response::HTTP_CREATED
            );
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
            $slider = Slider::findOrFail($id);
            $requested_data = $request->all();
            if ($request->path && $slider->path != $request->path) {
                if (File::exists($slider->path)) {
                    File::delete($slider->path);
                }
                $img_position = strpos($request->path, ";");
                $sub_str      = substr($request->path, 0, $img_position);
                $extension    = explode("/", $sub_str);
                $result       = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/Slider/slide_" . time() . ".webp";
                    $resize_img  = Image::make($request->path)->resize(1600, 470)->save($upload_path);
                    $requested_data['path'] = $upload_path;
                }
            }
            $slider->fill($requested_data)->save();
            return $this->successResponse(
                $slider,
                "Slider Update Successfully",
                Response::HTTP_CREATED
            );
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
            $slider = Slider::findOrFail($id);
            if (File::exists($slider->path)) {
                File::delete($slider->path);
            }
            $slider->delete();
            return $this->successResponse(
                null,
                "Slider Deleted Successfully",
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $slider = Slider::findOrFail($id);
            if ($slider->status == 1) {
                $slider->status = 0;
            } else {
                $slider->status = 1;
            }
            $slider->save();
            return $this->successResponse(
                null,
                "Slider Status Changed Successfully",
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
