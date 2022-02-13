<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineDiscount extends Model
{
    use HasFactory;

    protected $table = 'medicine_discounts';
    protected $primaryKey = 'id';

    protected $fillable = [
    	'medicine_id',
    	'discount_for',
    	'percentage',
    	'percentage_amount',
    	'current_amount',
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });
    }

    public function medicines()
    {
        return $this->belongsTo(Medicine::class, 'medicine_id');
    }
}
