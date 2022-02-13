<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderBaseInfo extends Model
{
    use HasFactory;

    protected $table = "order_base_infos";
    protected $primaryKey = "id";

    protected $fillable = [
        'customer_id',
        'order_code',
        'date',
        'total_medicine',
        'total_price',
        'total_paid',
        'total_due',
        'status',
    ];

    public $casts = [
        'total_price' => 'decimal:2',
        'total_paid' => 'decimal:2',
        'total_due' => 'decimal:2',
    ];

    public function scopeRelated($query)
    {
        return $query->with(
            'customer',
            'customer_details',
        )->with(['order_medicine_info' => function ($query) {
            $query->orderBy('medicine.name', 'ASC');
        }])
            ->with(['order_medicine_info.unit']);
    }

    public  function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id')->withDefault();
    }

    public  function customer_details()
    {
        return $this->belongsTo(CustomerDetails::class, 'customer_id', 'customer_id')->withDefault();
    }

    public  function order_medicine_info()
    {
        return $this->hasMany(OrderMedicineInfo::class, 'order_id');
    }
}
