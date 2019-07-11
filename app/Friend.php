<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    protected $fillable = [
           'name',
           'phone'
    ];
   public function friendSecret(){
        return $this-> belongsTo(FriendSecret::class);
    }
}
