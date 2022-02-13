<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicinePrice extends Model
{
    use HasFactory;

    protected $table = "medicine_prices";
    protected $primary_key = 'id';
    protected $fillable =  [
        'medicine_id',
        'unit_id',
        'type',
        'price',
    ];

    public $casts = [
        'medicine_id' => 'int',
        'unit_id' => 'int',
    ];


    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id')->withDefault();
    }
}
