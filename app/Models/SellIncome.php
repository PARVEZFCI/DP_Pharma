<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SellIncome extends Model
{
    use HasFactory;

    protected $table = "sell_incomes";
    protected $primaryKey = "id";
    protected $fillable = ["invoice_id", "customer_id", "code", "date", "amount", "serial", "account_id"];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->created_by = Auth::user()->id ?? null;
        });
    }
}
