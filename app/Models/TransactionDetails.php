<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TransactionDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "transaction_details";
    protected $primaryKey = "id";
    protected $fillable = [
        "trx_id",
        "invoice_id",
        "date",
        "paying"
    ];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, "trx_id");
    }
}
