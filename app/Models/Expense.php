<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $table = "expenses";
    protected $primaryKey = "id";
    protected $fillable = ["invoice", "type", "date", "amount", "account_id"];

    public function account()
    {
        return $this->belongsTo(Account::class, "account_id")->withDefault();
    }

    public function invoiceBase()
    {
        return $this->belongsTo(StockBaseInfo::class, "invoice")->withDefault();
    }
}
