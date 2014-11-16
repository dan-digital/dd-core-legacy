<?php

namespace Admin;

use View;

class DashboardController extends \BaseController {

	public function index()
	{
		return View::make('admin.index');
	}	
}