<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CompanyDetails;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class CompanyDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(CompanyDetails::first(), 200);
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
        //
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
            $details = CompanyDetails::findOrFail($id);
            $requested_data = $request->all();
            if ($request->logo && $details->logo != $request->logo) {
                if ($details->logo) {
                    if (File::exists($details->logo)) {
                        File::delete($details->logo);
                    }
                }
                $position = strpos($request->logo, ";");
                $sub_str = substr($request->logo, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/logo_" . time() . $extension[1];
                    $resize_img  = Image::make($request->logo)->save($upload_path);
                    $requested_data['logo'] = $upload_path;
                }
            }

            if ($request->favicon && $details->favicon != $request->favicon) {
                if ($details->favicon) {
                    if (File::exists($details->favicon)) {
                        File::delete($details->favicon);
                    }
                }
                $position = strpos($request->favicon, ";");
                $sub_str = substr($request->favicon, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/favicon_" . time() . $extension[1];
                    $resize_img  = Image::make($request->favicon)->save($upload_path);
                    $requested_data['favicon'] = $upload_path;
                }
            }

            $companyDetails = CompanyDetails::updateOrCreate(
                ['id' =>  $id],
                [
                    'name'            => $requested_data['name'],
                    'email'           => $requested_data['email'],
                    'phone'           => $requested_data['phone'],
                    'address'         => $requested_data['address'],
                    'terms_condition' => $requested_data['terms_condition'],
                    'privacy_policy'  => $requested_data['privacy_policy'],
                    'logo'            => $requested_data['logo'],
                    'favicon'         => $requested_data['favicon'],
                ]
            );
            return $this->successResponse(
                $companyDetails,
                "Company Details Update Successfully",
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
        //
    }
}
