<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockExpense extends Model
{
    use HasFactory;

    protected $table = "stock_expenses";
    protected $primaryKey = "id";
    protected $fillable = ["invoice_id", "code", "date", "amount", "serial", "account_id"];
}
