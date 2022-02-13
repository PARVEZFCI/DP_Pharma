<?php

namespace App\Http\Controllers;

use App\Imports\MedicineImport;
use App\Models\Medicine;
use App\Models\Generic;
use App\Models\Manufacturer;
use App\Models\Category;
use App\Models\MedicinePrice;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Response;

class MedicineImportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        // $request->validate([
        //     'file' => 'required|file|mimes:xlsx,csv'
        // ]);
        // dd($request->all());
        $array = Excel::toArray(new MedicineImport, $request->file('file'));
        $ext = $request->file('file')->getClientOriginalExtension();
        if ($ext == "xlsx" || $ext == "csv") {
            $unit = [];
            foreach ($array[0] as $key => $value) {
                $data = [];
                if ($value[1] != 'generic_id') {
                    if ($value[1]) {
                        $generic = Generic::firstOrCreate([
                            'generic_name' => $value[1],
                        ]);
                    }
                    if ($value[2]) {
                        $category = Category::firstOrCreate([
                            'category_name' => $value[2],
                        ]);
                    }
                    if ($value[3]) {
                        $manufacturer = Manufacturer::firstOrCreate([
                            'manufacture_name' => $value[3]
                        ]);
                    }

                    $data = [
                        'name'              => $value[0],
                        'generic_id'        => $generic->id,
                        'category_id'       => $category->id,
                        'manufacturer_id'   => $manufacturer->id,
                        'dosage'            => $value[4],
                        'alert_quantity'    => (int)5,
                        'conversion_factor' => (int)10,
                        'details'           => $value[11],
                        'image'             => $value[12],
                        'status'            => $value[13] ?? 0,
                    ];
                    $medicine = Medicine::create($data);
                    $unit[] = [
                        "medicine_id" => $medicine->id,
                        "unit_id" => 1,
                        "type" => "PRIMARY",
                        "price" => (float)($value[6]),
                        "retailer_discount" => (float)($value[9]),
                        "retailer_price" => (float)($value[10]),
                        "regular_discount" => (float)($value[7]),
                        "regular_price" => (float)($value[8])
                    ];
                    if ($medicine->status == 1) {
                        $unit[] = [
                            "medicine_id" => $medicine->id,
                            "unit_id" => 2,
                            "type" => "SECONDARY",
                            "price" =>
                            (float)($value[6] != "NULL" ? $value[6] / $medicine->conversion_factor : ''),
                            "retailer_discount" => (float)($value[9]),
                            "retailer_price" =>
                            (float)($value[10] != "NULL" ? $value[10] / $medicine->conversion_factor : ""),
                            "regular_discount" => (float)($value[7]),
                            "regular_price" =>
                            (float)($value[8] != "NULL" ? $value[8] / $medicine->conversion_factor : "")
                        ];
                    }
                }
            }
            MedicinePrice::insert($unit);
        }
        return response()->json(["Medicine Import Successfully", 200]);
    }
}
