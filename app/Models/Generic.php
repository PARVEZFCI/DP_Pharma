<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Generic extends Model
{
    use HasFactory;

    protected $table      = 'generics';
    protected $primaryKey = 'id';
    protected $fillable   = ['generic_name', 'description', 'status'];

    protected $casts = [
        'generic_name'  => 'string',
        'description'     => 'string',
        'status'         => 'integer',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('generic_name', 'LIKE', '%' . $q . '%');
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
