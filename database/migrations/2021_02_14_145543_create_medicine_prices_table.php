<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicine_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')->unsigned()->nullable();
            $table->foreignId('unit_id')->unsigned()->nullable();
            $table->string('type')->nullable();
            $table->decimal('price')->nullable();
            // $table->decimal('retailer_discount')->nullable();
            // $table->decimal('retailer_price')->nullable();
            // $table->decimal('regular_discount')->nullable();
            // $table->decimal('regular_price')->nullable();
            $table->foreignId('created_by')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('medicine_id')->references('id')->on('medicines')->onDelete('cascade');
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
        Schema::dropIfExists('medicine_prices');
    }
}
