<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StockBaseInfo extends Model
{
    use HasFactory;

    protected $table = "stock_base_infos";
    protected $primaryKey = "id";
    protected $fillable = [
        "code",
        "date",
        "voucher",
        "supplier_id",
        "created_by",
        "payment_method",
        "account_id",
        "sub_total",
        "discount",
        "discounted_amount",
        "vat_rate",
        "vat_amount",
        "total",
        "paid",
        "due",
        "remarks"
    ];

    public function scopeRelation($query)
    {
        return $query->with('suppliers', 'paymentMethods', 'productInfo', 'productInfo.productDetails');
    }

    public function seller()
    {
        return $this->belongsTo(User::class, "created_by")->withDefault();
    }

    public function suppliers()
    {
        return $this->belongsTo(Manufacturer::class, 'supplier_id');
    }

    public function paymentMethods()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method');
    }

    public function productInfo()
    {
        return $this->hasMany(StockProductInfo::class, 'base_id');
    }

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });
    }
}
