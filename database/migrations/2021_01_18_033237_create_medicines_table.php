<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->integer('generic_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('manufacturer_id')->nullable();
            $table->string('dosage')->nullable();
            $table->integer('alert_quantity')->nullable()->default(5);
            $table->integer('conversion_factor')->nullable()->default(1);
            $table->text('details')->nullable();
            $table->string('image')->nullable();
            $table->boolean('status')->default(1);
            $table->integer('duplicate')->default(0);
            $table->foreignId('created_by')->nullable();
            $table->foreignId('updated_by')->nullable();
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medicines');
    }
}
