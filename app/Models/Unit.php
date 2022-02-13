<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Unit extends Model
{
    use HasFactory;

    protected $table      = "units";
    protected $primaryKey = "id";

    protected $fillable = ['unit_name', 'symbol', 'description', 'status'];

    protected $casts = [
        'unit_name'   => 'string',
        'symbol'      => 'string',
        'description' => 'string',
        'status'       => 'integer',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('unit_name', 'LIKE', '%' . $q . "%")
            ->orWhere('symbol', 'LIKE', '%' . $q . "%");
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
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
