<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class list_friends extends Model
{
    protected $table = 'list_friends';
    protected $fillable = [
        'blocking_key',
        'friend_id'
    ];
}
