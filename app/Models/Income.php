<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

    protected $table = "incomes";
    protected $primaryKey = "id";
    protected $fillable = ["invoice", "type", "date", "amount", "account_id"];

    public function invoiceBase()
    {
        return $this->belongsTo(SellBaseInfo::class, "invoice")->withDefault();
    }

    public function account()
    {
        return $this->belongsTo(Account::class, "account_id")->withDefault();
    }
}
