<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderMedicineInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_medicine_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->unsigned()->nullable();
            $table->foreignId('medicine_id')->unsigned()->nullable();
            $table->float('medicine_price');
            $table->integer('quantity');
            $table->string('batch')->nullable();
            $table->foreignId('unit_id')->nullable();
            $table->float('sub_total');
            $table->timestamps();

            // $table->foreign('order_id')->references('id')->on('order_base_infos')->onDelete('cascade');
            $table->foreign('medicine_id')->references('id')->on('medicines')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_medicine_infos');
    }
}
