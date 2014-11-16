<?php

namespace Admin;

use View;
use Input;
use Redirect;
use Auth;

class SessionController extends \BaseController {

	public function create()
	{
		if (Auth::check())
		{
			return Redirect::route('admin.dashboard');
		}

		return View::make('admin.session.create');
	}

	public function store()
	{
		if (Auth::attempt(Input::only('username', 'password')))
		{
			return Redirect::route('admin.dashboard');
		}
		
		return Redirect::back()->withInput();
	}

	public function destroy()
	{
		Auth::logout();
		return Redirect::route('admin');
	}
}