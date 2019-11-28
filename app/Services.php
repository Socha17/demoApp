<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
  public function Cities() {
    return $this->belongsToMany(Cities::class);
  }
}
