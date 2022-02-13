<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellDetailInfo extends Model
{
    use HasFactory;

    protected $table = "sell_detail_infos";
    protected $primaryKey = "id";
    public $timestamps = false;
    protected $fillable = [
        "date",
        "base_id",
        "product_id",
        "batch",
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

    public function baseInfo()
    {
        return $this->belongsTo(SellBaseInfo::class, 'base_id');
    }

    public function product()
    {
        return $this->belongsTo(Medicine::class, 'product_id');
    }

    public function batchInfo()
    {
        return $this->belongsTo(StockSaleProductInfo::class, 'batch');
    }

    public function product_unit()
    {
        return $this->belongsTo(MedicinePrice::class, 'unit_id');
    }
}
