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

// All this says is that for any path, we want to load the app.blade.php view. 
// The app view will load the React component, which will handle all of the routes.
Route::view('/{path?}', 'app');
