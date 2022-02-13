<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use App\Models\Medicine;
use App\Models\MedicineDiscount;
use App\Http\Requests\StoreMedicineRequest;
use App\Models\MedicinePrice;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class MedicineController extends Controller
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
        $medicines = Medicine::Relation()
            ->Search($request->q)
            ->orderBy('name', 'ASC')->paginate($request->row);
        return response()->json($medicines);
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
    public function store(StoreMedicineRequest $request)
    {
     
        try {
            $medicine = new Medicine();
            $requested_data = $request->all();
            if ($request->image) {
                $img_position = strpos($request->image, ";");
                $sub_str      = substr($request->image, 0, $img_position);
                $extension    = explode("/", $sub_str);
                $result       = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/Medicines/" . time() . ".webp";
                    $resize_img  = Image::make($request->image)->resize(300, 300)->save($upload_path);
                    $requested_data['image'] = $upload_path;
                }
            }
            $medicine->fill($requested_data)->save();
            if ($request->primary_unit) {
                MedicinePrice::create(
                    [
                        "medicine_id"       => $medicine->id,
                        "unit_id"           => $request->primary_unit,
                        "type"              => "PRIMARY",
                        "price"             => $request->price,
                        // "retailer_discount" => $request->retailer_discount_percent ?? 0,
                        // "retailer_price"    => $request->retailer_discount_price ?? $request->price,
                        // "regular_discount"  => $request->patient_discount_percent ?? 0,
                        // "regular_price"     => $request->patient_discount_price ?? $request->price,
                        "created_by"        => Auth::user()->id
                    ]
                );
            }
            if ($request->secondary_unit) {
                MedicinePrice::create([
                    "medicine_id"       => $medicine->id,
                    "unit_id"           => $request->secondary_unit,
                    "type"              => "SECONDARY",
                    "price"             => $request->price / ($request->conversion_factor ?? 1),
                    "created_by"        => Auth::user()->id
                ]);
            }


            if ($request->third_unit) {
                MedicinePrice::create([
                    "medicine_id"       => $medicine->id,
                    "unit_id"           => $request->third_unit,
                    "type"              => "THIRD",
                    "price"             => ($request->price) / ($request->conversion_factor * $request->conversion_factor_third),
                  
                    "created_by"        => Auth::user()->id
                ]);
            }

            

            return $this->successResponse($medicine, "Medicine Saved Successfully", Response::HTTP_CREATED);
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
        $stocks = Medicine::with("stockSell")->findOrFail($id)->stockSell;
        return response()->json($stocks, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $medicine = Medicine::Relation()->findOrFail($id);
        return response()->json($medicine, 200);
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
            $medicine = Medicine::findOrFail($id);
            $requested_data = $request->all();
            if ($request->image && $medicine->image != $request->image) {
                if (File::exists($medicine->image)) {
                    File::delete($medicine->image);
                }

                $position = strpos($request->image, ";");
                $sub_str = substr($request->image, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == true) {
                    $upload_path = "backend_assets/assets/images/Medicines/" . time() . ".webp";
                    $resize_img  = Image::make($request->image)->resize(300, 300)->save($upload_path);
                    $requested_data['image'] = $upload_path;
                }
            }
            $medicine->fill($requested_data)->save();
            MedicinePrice::updateOrCreate(
                ['medicine_id' => $id, 'type' => 'PRIMARY'],
                [
                    "unit_id"           => $request->primary_unit,
                    "price"             => $request->price,
                    // "retailer_discount" => $request->retailer_discount_percent ?? 0,
                    // "retailer_price"    => $request->retailer_discount_price ?? $request->price,
                    // "regular_discount"  => $request->patient_discount_percent ?? 0,
                    // "regular_price"     => $request->patient_discount_price ?? $request->price,
                ]
            );
            MedicinePrice::updateOrCreate(
                ['medicine_id' => $id, 'type' => 'SECONDARY'],
                [
                    "unit_id"           => $request->secondary_unit,
                    "price"             => $request->price / ($request->conversion_factor ?? 1),
                    // "retailer_discount" => $request->retailer_discount_percent ?? 0,
                    // "retailer_price"    => ($request->retailer_discount_price ?? $request->price)
                    //     / ($request->conversion_factor ?? 1),
                    // "regular_discount"  => $request->patient_discount_percent ?? 0,
                    // "regular_price"     => ($request->patient_discount_price ?? $request->price)
                    //     / ($request->conversion_factor ?? 1),
                ]
            );


            MedicinePrice::updateOrCreate(
                ['medicine_id' => $id, 'type' => 'THIRD'],
                [
                    "unit_id"           => $request->third_unit,
                    "price"             => ($request->price) / (($request->conversion_factor ?? 1 ) * ($request->conversion_factor_third ?? 1)),
                    // "retailer_discount" => $request->retailer_discount_percent ?? 0,
                    // "retailer_price"    => ($request->retailer_discount_price ?? $request->price)
                    //     / ($request->conversion_factor ?? 1),
                    // "regular_discount"  => $request->patient_discount_percent ?? 0,
                    // "regular_price"     => ($request->patient_discount_price ?? $request->price)
                    //     / ($request->conversion_factor ?? 1),
                ]
            );

            return $this->successResponse($medicine, "Medicine Updated Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $medicine = Medicine::findOrFail($id);
            if ($medicine->status == 1) {
                $medicine->status = 0;
                $status = Response::HTTP_OK;
            } else {
                $medicine->status = 1;
                $status = Response::HTTP_CREATED;
            }
            $medicine->save();
            return $this->successResponse($medicine, "Medicine Status Change Successfully", $status);
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
            $medicine = Medicine::findOrFail($id)->delete();
            MedicinePrice::where('medicine_id', $id)->delete();
            $status = 200;
            return $this->successResponse($medicine, "Medicine Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function productSearch(Request $request)
    {
        try {
            $medicines = Medicine::Search($request->search)->Relation()
                ->where(function ($data) use ($request) {
                    if ($request->category) {
                        $data->where('category_id', $request->category);
                    }
                })
                ->Active()->orderBy('name', 'ASC')->limit(20)->get();
            return \response()->json($medicines, 200);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
