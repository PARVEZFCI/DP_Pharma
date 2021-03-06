<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolePermission extends Model
{
    use HasFactory;

    protected $table = "role_permissions";
    protected $primaryKey = "id";
    protected $fillable = ['role_id', 'permission_id'];

    public function permissions()
    {
        return $this->belongsTo('App\Models\Permission', 'permission_id');
    }
}
