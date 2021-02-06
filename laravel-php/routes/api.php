<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');


//Route::post('details', function() { echo "bhagyesh";});
Route::middleware('auth:api')->get('/details', 'UserController@details');
/*
Route::group(['middleware' => 'auth:api'], function(){
  Route::post('details', 'UserController@details');
});
*/
Route::group( [ 'prefix' => 'contact', 'middleware' => 'auth:api' ], function()
{
    Route::put('', 'ContactController@store' );
    Route::post('{id}', 'ContactController@update' )->where('id', '[0-9]+');
    Route::get('{id}', 'ContactController@get' )->where('id', '[0-9]+');
    Route::delete('{id}', 'ContactController@destroy' )->where('id', '[0-9]+');
    Route::get('', 'ContactController@list' );
});
