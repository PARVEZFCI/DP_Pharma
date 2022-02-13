<?php

namespace App\Http\Controllers;

use App\Exports\MedicineExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MedicineExportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($type)
    {
        $ext = $type;
        return Excel::download(new MedicineExport(), "Medicines.{$ext}");
    }
}
