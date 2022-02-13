<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicineDiscountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicine_discounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_id')->unsigned()->nullable();
            $table->string('discount_for', 20)->nullable();
            $table->string('percentage', 20)->nullable();
            $table->string('percentage_amount', 50)->nullable();
            $table->string('current_amount', 50)->nullable();
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
        Schema::dropIfExists('medicine_discounts');
    }
}
