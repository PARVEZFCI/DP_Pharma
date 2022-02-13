<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellBaseInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell_base_infos', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->date('date')->nullable();
            $table->string('type')->nullable();
            $table->string('voucher')->nullable();
            $table->foreignId('customer_id')->nullable();
            $table->foreignId('created_by')->nullable();
            $table->foreignId('payment_method')->nullable();
            $table->decimal('sub_total')->nullable();
            $table->decimal('discount')->nullable();
            $table->decimal('discounted_amount')->nullable();
            $table->decimal('vat_rate')->nullable();
            $table->decimal('vat_amount')->nullable();
            $table->decimal('total')->nullable();
            $table->decimal('paid')->nullable();
            $table->decimal('due')->nullable();
            $table->text('remarks')->nullable();
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('pos_customers')->onDelete('set null');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            $table->foreign('payment_method')->references('id')->on('payment_methods')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sell_base_infos');
    }
}
