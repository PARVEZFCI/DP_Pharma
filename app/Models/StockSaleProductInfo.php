<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockSaleProductInfo extends Model
{
    use HasFactory;

    protected $table = "stock_sale_products";
    protected $primaryKey = "id";
    public $timestamps = false;
    protected $fillable = [
        "medicine_id",
        "batch",
        "exp_date",
        "stock",
        "sale",
        "purchase_price",
        "stock_count"
    ];

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, "medicine_id")->withDefault();
    }
}
