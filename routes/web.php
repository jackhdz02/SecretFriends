<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', 'HomeController@welcome')->name('welcome');
Route::resource('/friends','FriendsController');
Route::get('create/listFriends','FriendsController@create');
Route::get('/post_list/', 'FriendsController@store');
Route::get('/listFriends/list','FriendsController@index');