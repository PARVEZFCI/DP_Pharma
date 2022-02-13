<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable
{
    use HasFactory;
    use Notifiable;

    protected $guard = 'customer';

    protected $table = "customers";
    protected $primaryKey = "id";
    protected $fillable = [
        "name",
        "email",
        "phone",
        "password",
        "customer_type",
        "image",
        "status",
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function scopeSearch($query, $q)
    {
        return $query->where('name', 'LIKE', '%' . $q . '%')
            ->orWhere('email', 'LIKE', '%' . $q . '%');
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function orders()
    {
        return $this->hasMany(OrderBaseInfo::class, 'customer_id');
    }

    public function customer_details()
    {
        return $this->hasOne(CustomerDetails::class, 'customer_id');
    }
}
