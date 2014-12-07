<?php

namespace Admin;

use View, Request, User, Input, Redirect, Hash;

class UsersController extends \BaseController {

	protected $user;

	public function __construct(User $user)
	{
		$this->user = $user;
	}

	/**
	 * Display a listing of the resource.
	 * GET /users
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = $this->user->all();
		
		if (Request::wantsJson())
		{
			return $users;
		}

		return View::make('admin.users.index', ['users' => $users]);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /users/create
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('admin.users.create');
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /users
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();

		if (! $this->user->fill($input)->isValid())
		{
			return Redirect::back()->withInput()->withErrors($this->user->errors);
		}

		$this->user->password = Hash::make($input['password']);
		$this->user->save();

		return Redirect::route('admin.users.index')->with('ddMessage', ['text' => $this->user->username.' was successfully added.', 'type' => 'confirm']);
	}

	/**
	 * Display the specified resource.
	 * GET /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$users = $this->user->find($id);
		
		if (Request::wantsJson())
		{
			return $users;
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /users/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$user = $this->user->find($id);
		$user->delete();
	}

}