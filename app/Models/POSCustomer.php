<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class POSCustomer extends Model
{
    use HasFactory;

    protected $table = "pos_customers";
    protected $primaryKey = "id";
    protected $fillable = ["name", "phone", "sex", "status"];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeSearch($query, $q)
    {
        return $query->when($q, function ($query) use ($q) {
            $query->where('name', 'LIKE', $q . '%');
        });
    }
}
