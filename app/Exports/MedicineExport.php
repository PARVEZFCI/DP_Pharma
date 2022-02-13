<?php

namespace App\Exports;

use App\Models\Medicine;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class MedicineExport implements FromArray, WithStyles, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
        ];
    }


    public function headings(): array
    {
        return [
            "#",
            "Name",
            "Generic",
            "Form",
            "Manufacturer",
            "Dosage",
            "Primary Unit",
            "MRP",
            "Patient Discount",
            "Patient Price",
            "Pharmacy Discount",
            "Pharmacy Price",
            "Secondary Unit",
            "Patient Discount",
            "patient Price",
            "Pharmacy Discount",
            "Pharmacy Price",
            "Alert Quantity",
            "Conversion Factor",
            "Details",
            "Status"

        ];
    }

    public function array(): array
    {
        $array = [];
        $medicines = Medicine::Relation()->orderBy('name', 'ASC')->get()->toArray();
        foreach ($medicines as $key => $value) {
            $array[] = [
                'sl'                          => ++$key,
                'name'                        => $value['name'],
                'generic_id'                  => isset($value['generic']) && $value['generic'] != null
                    ? $value['generic']['generic_name'] : "",
                'form'                        => isset($value['category']) && $value['category'] != null
                    ? $value['category']['category_name'] : "",
                'manufacturer'                => isset($value['manufacturer']) && $value['manufacturer'] != null
                    ? $value['manufacturer']['manufacture_name'] : "",
                'dosage'                      => $value['dosage'],
                'primary_unit'                => isset($value['prices'][0]) ? (isset($value['prices'][0]['unit'])
                    ? $value['prices'][0]['unit']['symbol'] : "") : "",
                'primary_price'               => isset($value['prices'][0])
                    ? $value['prices'][0]['price'] : "",
                'primary_regular_discount'    => isset($value['prices'][0])
                    ? $value['prices'][0]['regular_discount'] : "",
                'primary_regular_price'       => isset($value['prices'][0])
                    ? $value['prices'][0]['regular_price'] : "",
                'primary_retailer_discount'   => isset($value['prices'][0])
                    ? $value['prices'][0]['retailer_discount'] : "",
                'primary_retailer_price'      => isset($value['prices'][0])
                    ? $value['prices'][0]['retailer_price'] : "",
                'secondary_unit'              => isset($value['prices'][1])
                    ? ($value['prices'][1]['unit']
                        ? $value['prices'][1]['unit']['symbol']
                        : '')
                    : '',
                'secondary_regular_discount'  => isset($value['prices'][1])
                    ? $value['prices'][1]['regular_discount'] : '',
                'secondary_regular_price'     => isset($value['prices'][1])
                    ? $value['prices'][1]['regular_price'] : '',
                'secondary_retailer_discount' => isset($value['prices'][1])
                    ? $value['prices'][1]['retailer_discount'] : '',
                'secondary_retailer_price'    => isset($value['prices'][1])
                    ? $value['prices'][1]['retailer_price'] : '',
                'alert_quantity'              => $value['alert_quantity'],
                'conversion_factor'           => $value['conversion_factor'],
                'details'                     => $value['details'],
                'status'                      => $value['status']
            ];
        }
        return $array;
    }
}
