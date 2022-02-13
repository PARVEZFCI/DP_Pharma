<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_expenses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->nullable();
            $table->string('code')->nullable();
            $table->date('date')->nullable();
            $table->decimal("amount")->nullable();
            $table->integer("serial")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_expenses');
    }
}
