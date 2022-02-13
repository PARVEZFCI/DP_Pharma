<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderMedicineInfo extends Model
{
    use HasFactory;

    protected $table = "order_medicine_infos";
    protected $primaryKey = "id";

    protected $fillable = [
        'order_id',
        'medicine_id',
        'medicine_price',
        'discount',
        'discount_price',
        'quantity',
        'sub_total',
        'batch',
        'unit_id'
    ];

    public $casts = [
        'medicine_price' => 'decimal:2',
        'discount'       => 'decimal:2',
        'discount_price' => 'decimal:2',
        'sub_total'      => 'decimal:2',
    ];

    public function scopeRelation($query)
    {
        return $query->with('unit', 'order_base_info.customer');
    }

    public function order_base_info(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(OrderBaseInfo::class, 'order_id');
    }

    public function medicine(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Medicine::class, 'medicine_id')->orderBy('name');
    }

    public function unit(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(MedicinePrice::class, 'unit_id');
    }
}
