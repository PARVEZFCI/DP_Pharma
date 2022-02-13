<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyDetails extends Model
{
    use HasFactory;

    protected $table = "company_details";
    protected $primaryKey = "id";
    protected $fillable = [
        "name",
        "phone",
        "email",
        "address",
        "terms_condition",
        "privacy_policy",
        "logo",
        "favicon"
    ];
    public $timestamps = false;
}
