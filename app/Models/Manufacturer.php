<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Manufacturer extends Model
{
    use HasFactory;

    protected $table      = 'manufactures';
    protected $primaryKey = 'id';
    protected $fillable   = [
        'manufacture_name',
        'mobile',
        'email',
        'city',
        'country',
        'details',
        'status'
    ];

    protected $casts = [
        'manufacture_name' => 'string',
        'mobile'            => 'string',
        'email'            => 'string',
        'city'                => 'string',
        'country'            => 'string',
        'details'            => 'string',
        'status'            => 'integer',
    ];

    public function medicine()
    {
        return $this->hasMany(Medicine::class, 'manufacturer_id');
    }

    public function stockSupplier()
    {
        return $this->hasMany(StockBaseInfo::class, 'supplier_id');
    }

    public function scopeSearch($query, $q)
    {
        return $query->where('manufacture_name', 'LIKE', '%' . $q . '%')
            ->orWhere('mobile', 'LIKE', '%' . $q . '%')
            ->orWhere('country', 'LIKE', '%' . $q . '%');
    }

    public function scopeStatus($query)
    {
        return $query->where('status', '1');
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
