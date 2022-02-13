<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string("name")->nullable();
            $table->foreignId("type")->nullable();
            $table->decimal("balance")->default(0)->nullable();
            $table->boolean("status")->default(1);
            $table->text("description")->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('type')->references('id')->on('payment_methods')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
