<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Account extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "accounts";
    protected $primaryKey = "id";
    protected $fillable = ["name", "type", "balance", "description", "status"];

    public function types()
    {
        return $this->belongsTo(PaymentMethod::class, 'type');
    }

    public function scopeActive($query)
    {
        return $query->where("status", 1);
    }
}
