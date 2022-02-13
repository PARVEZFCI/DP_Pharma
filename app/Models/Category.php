<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Category extends Model
{
    use HasFactory;

    protected $table      = 'categories';
    protected $primaryKey = 'id';
    protected $fillable   = ['category_name', 'code', 'description', 'status'];

    protected $casts = [
        'category_name' => 'string',
        'code'             => 'string',
        'description'     => 'string',
        'status'         => 'integer',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('category_name', 'LIKE', '%' . $q . '%')
            ->orWhere('code', 'LIKE', '%' . $q . '%');
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
