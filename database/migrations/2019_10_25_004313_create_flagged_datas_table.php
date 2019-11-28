<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlaggedDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flagged_datas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('comments');
            $table->integer('cities_id')->unsigned()->index();
            $table->foreign('cities_id')->references('id')->on('cities');
            $table->integer('services_id')->unsigned()->index();
            $table->foreign('services_id')->references('id')->on('services');
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
        Schema::dropIfExists('flagged_datas');
    }
}
