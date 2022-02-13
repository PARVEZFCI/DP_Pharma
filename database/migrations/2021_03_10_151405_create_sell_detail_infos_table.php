<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellDetailInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell_detail_infos', function (Blueprint $table) {
            $table->id();
            $table->date('date')->nullable();
            $table->foreignId('base_id')->nullable();
            $table->foreignId('product_id')->nullable();
            $table->foreignId('batch')->nullable();
            $table->foreignId('unit_id')->nullable();
            $table->integer('qty')->nullable();
            $table->integer('pupq')->nullable();
            $table->integer('total_qty')->nullable();
            $table->decimal('rate')->nullable();
            $table->decimal('discount')->nullable();
            $table->decimal('discounted_amount')->nullable();
            $table->decimal('vat')->nullable();
            $table->decimal('vat_amount')->nullable();
            $table->decimal('total_amount')->nullable();

            $table->foreign('base_id')->references('id')->on('sell_base_infos')->onDelete('set null');
            $table->foreign('product_id')->references('id')->on('medicines')->onDelete('set null');
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('set null');
            $table->foreign('batch')->references('id')->on('stock_sale_products')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sell_detail_infos');
    }
}
