<?php

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function()
{
	Route::resource('session', 'SessionController');
	Route::get('', ['as' => 'admin', 'uses' => 'SessionController@create']);

	Route::group(['before' => 'auth'], function ()
	{
		Route::get('logout', ['as' => 'admin.logout', 'uses' => 'SessionController@destroy']);
		Route::get('dashboard', ['as' => 'admin.dashboard', 'uses' => 'DashboardController@index']);
		Route::get('users', ['as' => 'admin.users', 'uses' => 'UsersController@index']);
	});
});

Route::get('/', function()
{
	return View::make('hello');
});