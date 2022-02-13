<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerDetails extends Model
{
    use HasFactory;

    protected $table = "customer_details";
    protected $primaryKey = "id";
    protected $fillable = [
        "customer_id",
        "address",
        "phone",
        "nid",
        "pharmacy_name",
        "trade_license",
        "shop_image",
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('pharmacy_name', 'LIKE', '%' . $q . '%');
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
