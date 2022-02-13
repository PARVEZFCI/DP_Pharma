<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAccess extends Model
{
    use HasFactory;

    protected $table = "role_users";
    protected $primaryKey = "id";
    protected $fillable = ['user_id', 'role_id'];

    public function roles()
    {
        return $this->belongsTo('App\Models\Role', 'role_id');
    }

    public function users()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
