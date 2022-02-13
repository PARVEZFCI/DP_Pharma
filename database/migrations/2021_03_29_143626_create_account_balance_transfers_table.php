<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountBalanceTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_balance_transfers', function (Blueprint $table) {
            $table->id();
            $table->date("date")->nullable();
            $table->foreignId("from_id")->nullable();
            $table->foreignId("to_id")->nullable();
            $table->foreignId("type_id")->nullable();
            $table->decimal("amount")->default(0)->nullable();
            $table->text("remarks")->nullable();
            $table->foreignId("created_by")->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('from_id')->references('id')->on('accounts')->onDelete('set null');
            $table->foreign('to_id')->references('id')->on('accounts')->onDelete('set null');
            $table->foreign('type_id')->references('id')->on('payment_methods')->onDelete('set null');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_balance_transfers');
    }
}
