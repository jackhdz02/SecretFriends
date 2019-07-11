<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FriendSecret extends Model
{
    protected $fillable = [
           'name',
           'phone'
    ];
    public function friend(){
        return $this-> belongsTo(Friend::class);
    }
}
