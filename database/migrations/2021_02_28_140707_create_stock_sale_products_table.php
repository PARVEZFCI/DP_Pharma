<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockSaleProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_sale_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')->nullable();
            $table->string('batch')->nullable();
            $table->date('exp_date')->nullable();
            $table->integer('stock')->nullable();
            $table->integer('sale')->nullable();
            $table->decimal('purchase_price')->nullable();
            $table->integer('stock_count')->nullable();

            $table->foreign('medicine_id')->references('id')->on('medicines')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_sale_products');
    }
}
