<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class list_friends extends Model
{
    public function Friends() {
        return $this->hasMany(friends::class);
    }
}
