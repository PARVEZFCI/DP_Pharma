<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToModel;

class MedicineImport implements ToModel
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        // print_r($row);
        // return new Medicine([

        // ]);
    }
}
