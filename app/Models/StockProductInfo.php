<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockProductInfo extends Model
{
    use HasFactory;

    protected $table = "stock_product_infos";
    protected $primaryKey = "id";
    public $timestamps = false;
    protected $fillable = [
        "date",
        "base_id",
        "product_id",
        "batch",
        "exp_date",
        "unit_id",
        "qty",
        "pupq",
        "total_qty",
        "rate",
        "discount",
        "discounted_amount",
        "vat",
        "vat_amount",
        "total_amount",
    ];

    public function productDetails()
    {
        return $this->belongsTo(Medicine::class, 'product_id');
    }

    public function baseInfo()
    {
        return $this->belongsTo(StockBaseInfo::class, "base_id");
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
}
