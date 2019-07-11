<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListFriends extends Model
{
    public function friend(){
        return $this-> hasMany(Friend::class);
    }
    public function secretfriend(){
        return $this-> hasMany(FriendSecret::class);
    }
}
