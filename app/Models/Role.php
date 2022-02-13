<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $table = "roles";
    protected $primaryKey = "id";
    protected $fillable = ['name', 'status'];

    protected $casts = [
        'name'    => 'string',
        'status'  => 'integer',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('name', 'LIKE', '%' . $q . '%');
    }

    public function scopeStatus($query)
    {
        return $query->where('status', 1);
    }
}
