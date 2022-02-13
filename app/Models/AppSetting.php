<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppSetting extends Model
{
    use HasFactory;

    protected $table      = 'app_settings';
    protected $primaryKey = 'id';
    protected $fillable   = ['vat', 'batch', 'account_id'];

    public $casts = [
        "vat"   => "float",
        "batch" => "integer",
    ];
}
