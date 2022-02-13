<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionHead extends Model
{
    use HasFactory;

    protected $table = "transaction_heads";
    protected $primaryKey = "id";
    protected $fillable = ["name", "status"];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
}
