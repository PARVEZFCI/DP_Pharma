<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderBaseInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_base_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->unsigned()->nullable();
            $table->text('order_code');
            $table->date('date');
            $table->integer('total_medicine');
            $table->integer('total_price');
            $table->integer('total_paid');
            $table->integer('total_due');
            $table->tinyInteger('status')->default(1)->comment('1 = Pending, 2 = Order Accepted, 3 = On The Way, 4 = Success, 5 = Rejected');
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_base_infos');
    }
}
