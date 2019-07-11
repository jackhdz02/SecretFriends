<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class friend extends Model
{
    protected $table = 'friends';
    protected $fillable = [
        'name',
        'phone',
        'secret'
    ];
}
