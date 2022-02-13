<?php

namespace App\Services;

use Carbon\Carbon;

class GetDateRange
{
    protected $from;
    protected $to;

    public function __construct()
    {
        $this->from = date("Y-m-d");
        $this->to = date("Y-m-d");
    }

    public function getDateRange($type, $from = "", $to = "")
    {
        if ($type == "today") {
            $this->from = date("Y-m-d");
            $this->to = date("Y-m-d");
        } elseif ($type == "yesterday") {
            $this->from = Carbon::yesterday()->toDateString();
            $this->to = Carbon::yesterday()->toDateString();
        } elseif ($type == "last7") {
            $this->from = Carbon::now()->subDays(6)->toDateString();
            $this->to = Carbon::now()->toDateString();
        } elseif ($type == "last30") {
            $this->from = Carbon::now()->subDays(29)->toDateString();
            $this->to = Carbon::now()->toDateString();
        } elseif ($type == "thismonth") {
            $this->from = Carbon::now()->firstOfMonth()->toDateString();
            $this->to = Carbon::now()->toDateString();
        } elseif ($type == "lastmonth") {
            $this->from = Carbon::now()->startOfMonth()->subMonthsNoOverflow()->toDateString();
            $this->to = Carbon::now()->subMonthsNoOverflow()->endOfMonth()->toDateString();
        } elseif ($type == "custom") {
            $this->from = $from;
            $this->to = $to;
        }
    }
}
