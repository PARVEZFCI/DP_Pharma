<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class DateWiseExpenseExport implements FromView
{
    protected $reportData;

    public function __construct($data)
    {
        $this->reportData = $data;
    }

    public function view(): View
    {
        $report = $this->reportData;
        return view('Export.dateWiseExpenseExport', compact("report"));
    }
}
