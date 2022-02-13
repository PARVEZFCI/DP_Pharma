<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class DateWiseStockExport implements FromView
{
    protected $reportData;

    public function __construct($data)
    {
        $this->reportData = $data;
    }

    public function view(): View
    {
        $report = $this->reportData;
        return view('Export.dateWiseStockExport', compact("report"));
    }
}
