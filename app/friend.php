<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class friend extends Model
{
    public function list_Friends() {
        return $this->belongsTo(list_friends::class);
    }
}
