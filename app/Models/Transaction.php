<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "transactions";
    protected $primaryKey = "id";
    protected $fillable = [
        "head_id",
        "type_id",
        "account_id",
        "patient_id",
        "trx_type",
        "date",
        "created_by",
        "amount",
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, "created_by")->withDefault();
    }

    public function Details()
    {
        return $this->hasMany(TransactionDetails::class, 'trx_id', 'id');
    }

    public function transactionHead()
    {
        return $this->belongsTo(TransactionHead::class, 'head_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'type_id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, "account_id");
    }
}
