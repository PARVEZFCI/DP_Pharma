<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('head_id')->nullable();
            $table->foreignId('type_id')->nullable();
            $table->foreignId('account_id')->nullable();
            $table->foreignId("patient_id")->nullable();
            $table->string("trx_type")->nullable();
            $table->date("date")->nullable();
            $table->foreignId('created_by')->nullable();
            $table->decimal('amount');
            $table->timestamps();

            $table->foreign('type_id')->references('id')->on('payment_methods')->onDelete('set null');
            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('set null');
            $table->foreign('head_id')->references('id')->on('transaction_heads')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
