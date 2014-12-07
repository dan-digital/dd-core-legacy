<?php

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function()
{
	Route::resource('session', 'SessionController', ['only' => ['create', 'store', 'destroy']]);
	Route::get('', ['as' => 'admin', 'uses' => 'SessionController@create']);

	Route::group(['before' => 'auth'], function ()
	{
		Route::get('logout', ['as' => 'admin.logout', 'uses' => 'SessionController@destroy']);
		Route::get('dashboard', ['as' => 'admin.dashboard', 'uses' => 'DashboardController@index']);
		Route::resource('users', 'UsersController');
	});
});

Route::get('', function ()
{
	return View::make('hello');
});