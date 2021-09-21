<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
          $table->increments('c_id');
          $table->string('email', 255);
          $table->string('first_name', 20);
          $table->string('last_name', 20);
          $table->string('mobile', 255);
          $table->unsignedBigInteger('user_id');
          $table->foreign('user_id')->references('id')->on('users');
          $table->timestamps();
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
