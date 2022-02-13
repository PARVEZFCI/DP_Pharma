<?php

namespace App\Http\Controllers\Frontend;

use File;
use App\Helpers\Helper;
use App\Models\Customer;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CustomerDetails;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use App\Http\Requests\StoreRegularRequest;
use App\Http\Requests\StoreRetailerRequest;

class RegistrationController extends Controller
{
    use ApiResponse;

    public function storeRetailerCustomer(StoreRetailerRequest $request)
    {
        try {
            DB::beginTransaction();
            if ($request->trade_license) {
                $img_pos = strpos($request->trade_license, ";");
                $sub_str = substr($request->trade_license, 0, $img_pos);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == 1) {
                    $upload_path  = "frontend_assets/assets/img/registration/trade_licence/" . time() . ".webp";
                    $resize_image = Image::make($request->trade_license)->resize(300, 300);
                    $resize_image->save($upload_path);
                    $request['trade_license'] = $upload_path;
                }
            }

            if ($request->shop_image) {
                $img_pos = strpos($request->shop_image, ";");
                $sub_str = substr($request->shop_image, 0, $img_pos);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == 1) {
                    $upload_path  = "frontend_assets/assets/img/registration/shop/" . time() . ".webp";
                    $resize_image = Image::make($request->shop_image)->resize(300, 300);
                    $resize_image->save($upload_path);
                    $request['shop_image'] = $upload_path;
                }
            }

            $request['password'] = Hash::make($request->password);
            $request['customer_type'] = 1;
            $request['status'] = 0;
            $request['phone'] = $request->phone;
            $customer = new Customer();
            $customer->fill($request->all())->save();

            $customer_details = new CustomerDetails();
            $request['customer_id'] = $customer->id;
            $customer_details->fill($request->all())->save();

            DB::commit();
            return $this->successResponse(null, "Please,Wait for admin approval  to see retailer prices", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function storeRegularCustomer(StoreRegularRequest $request)
    {

        try {
            DB::beginTransaction();
            $request['password'] = Hash::make($request->password);
            $request['customer_type'] = 2;
            $customer = new Customer();
            $customer->fill($request->all())->save();

            $customer_details = new CustomerDetails();
            $request['customer_id'] = $customer->id;
            $request['address'] = $request->address;
            $request['phone'] = $request->phone;
            $request['pharmacy_name'] = "";
            $customer_details->fill($request->all())->save();

            DB::commit();
            return $this->successResponse(null, "Registration Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
