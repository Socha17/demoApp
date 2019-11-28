<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cities extends Model
{
  public function Services() {
    return $this->belongsToMany(Services::class);
  }

}
