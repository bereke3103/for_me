<?php

use Illuminate\Support\Facades\Route;

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
Route::group(['namespace' => 'Pages'], function () {
    Route::get('/', 'MainController@index');
    Route::group(['namespace' => 'Registration', 'prefix' => 'registrations'], function () {
        Route::get('/', 'IndexController')->name('pages.registration.index');
        Route::get('/create', 'CreateController')->name('pages.registration.create');
        Route::post('/', 'StoreController')->name('pages.registration.store');
//        Route::get('/{user}', 'ShowController')->name('pages.registration.show');
//        Route::get('/{user}/edit', 'EditController')->name('pages.registration.edit');
//        Route::patch('/{user}', 'UpdateController')->name('pages.registration.update');
//        Route::delete('/{user}', 'DeleteController')->name('pages.registration.delete');
    });
});

