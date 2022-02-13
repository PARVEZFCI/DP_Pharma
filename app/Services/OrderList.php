<?php

namespace App\Services;

use App\Models\Customer;
use App\Models\OrderBaseInfo;
use App\Services\GetDateRange;

class OrderList extends GetDateRange
{
    public function getOrderList($customerType, $return)
    {
        if ($customerType == "patient") {
            $patients = Customer::where('customer_type', 2)->get()->pluck('id')->toArray();
        } else {
            $patients = Customer::where('customer_type', 1)->get()->pluck('id')->toArray();
        }

        $invoices = OrderBaseInfo::with('customer', 'customer_details')
            ->whereIn('customer_id', $patients)
            ->whereBetween("date", [$this->from, $this->to])
            ->orderBy('id', 'desc');
        if ($return == "export") {
            $invoices = $invoices->get();
        } else {
            $invoices = $invoices->paginate(20);
        }
        return $invoices;
    }
}
