<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;

class DateWiseSellerExport implements FromView
{
    protected $reportData;

    public function __construct($data)
    {
        $this->reportData = $data;
    }

    public function view(): View
    {
        $report = $this->reportData;
        return view('Export.dateWiseSellerExport', compact("report"));
    }
}
