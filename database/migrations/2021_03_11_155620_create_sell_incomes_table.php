<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellIncomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell_incomes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->nullable();
            $table->foreignId('customer_id')->nullable();
            $table->string('code')->nullable();
            $table->date('date')->nullable();
            $table->decimal("amount")->nullable();
            $table->integer("serial")->nullable();
            $table->foreignId("created_by")->nullable();
            $table->timestamps();

            $table->foreign('invoice_id')->references('id')->on('sell_base_infos')->onDelete('cascade');
            $table->foreign('customer_id')->references('id')->on('pos_customers')->onDelete('set null');
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
        Schema::dropIfExists('sell_incomes');
    }
}
