<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class secret extends Model
{
    protected $table = 'secret';
    protected $fillable = [
        'name',
        'phone'
    ];
}
