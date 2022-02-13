<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SellBaseInfo extends Model
{
    use HasFactory;

    protected $table = "sell_base_infos";
    protected $primaryKey = "id";
    protected $fillable = [
        "code",
        "date",
        "voucher",
        "customer_id",
        "created_by",
        "payment_method",
        "sub_total",
        "discount",
        "discounted_amount",
        "vat_rate",
        "vat_amount",
        "total",
        "paid",
        "type",
        "due",
        "account_id",
        "remarks"
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, "created_by")->withDefault();
    }

    public function customer()
    {
        return $this->belongsTo(POSCustomer::class, 'customer_id');
    }

    public function paymentMethods()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method');
    }

    public function detailInfo()
    {
        return $this->hasMany(SellDetailInfo::class, 'base_id');
    }

    public function scopeRelation($query)
    {
        return $query->with('customer', 'paymentMethods', 'detailInfo', 'detailInfo.product', 'detailInfo.batchInfo');
    }

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });
    }
}
