<?php

namespace App\Models;

use File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class Medicine extends Model
{
    use HasFactory;

    protected $table    = 'medicines';
    protected $primary_key = 'id';
    protected $fillable =  [
        'name',
        'category_id',
        'generic_id',
        'manufacturer_id',
        'dosage',
        'details',
        'alert_quantity',
        'conversion_factor',
        'image',
        'status',
        'duplicate',

        'conversion_factor_third'
    ];

    public $casts = [
        'category_id' => 'int',
        'generic_id' => 'int',
        'manufacturer_id' => 'int',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->when($q, function ($query) use ($q) {
            $query->where('name', 'LIKE', $q . '%');
        });
    }

    public function scopeRelation($query)
    {
        return $query->with('category', 'generic', 'manufacturer')
            ->with(['prices' => function ($query) {
                $query->orderBy('type', 'ASC');
            }])->with(['prices.unit'])->with(['stockSell' => function ($query) {
                $query->orderBy('batch', 'ASC');
            }]);
    }

    public function scopeFrontSearch($query, $q)
    {
        return $query->when($q, function ($query) use ($q) {
            $query->where('name', 'LIKE', $q . '%')
                ->orWhere('manufacturer_id', 'LIKE', '%' . $q . '%')
                ->orWhere('generic_id', 'LIKE', '%' . $q . '%')
                ->orWhere('category_id', 'LIKE', '%' . $q . '%');
        });
    }

    public function scopeActive($query)
    {
        if (
            Auth::guard('customer')->check() &&
            Auth::guard('customer')->user()->customer_type == 1
        ) {
            return $query->where('status', 1);
        } else {
            return $query->where('status', 1)->where('duplicate', 0);
        }
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id')->withDefault();
    }

    public function generic()
    {
        return $this->belongsTo(Generic::class, 'generic_id')->withDefault();
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class, 'manufacturer_id')->withDefault();
    }

    public function prices()
    {
        return $this->hasMany(MedicinePrice::class, 'medicine_id');
    }

    public function medicine_discounts()
    {
        return $this->hasMany(MedicineDiscount::class, 'id');
    }

    public function stockSell()
    {
        return $this->hasMany(StockSaleProductInfo::class, 'medicine_id');
    }

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });

        static::updating(function ($model) {
            $model->updated_by = Auth::user()->id ?? null;
        });
    }
}
