<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AccountBalanceTransfer extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "account_balance_transfers";
    protected $primaryKey = "id";
    protected $fillable = [
        "date",
        "from_id",
        "to_id",
        "type_id",
        "amount",
        "remarks",
        "created_by"
    ];

    public function from()
    {
        return $this->belongsTo(Account::class, "from_id");
    }

    public function to()
    {
        return $this->belongsTo(Account::class, "to_id");
    }

    public function type()
    {
        return $this->belongsTo(PaymentMethod::class, 'type_id');
    }
}
