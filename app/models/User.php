<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	protected $fillable = ['username', 'password'];
	protected $table = 'users';
	protected $hidden = array('password', 'remember_token');
	public $errors;

	public static $rules = [
		'username' => 'required|unique:users',
		'password' => 'required'
	];

	public function isValid()
	{
		$validation = Validator::make($this->attributes, static::$rules);
		if ($validation->passes()) return true;
		$this->errors = $validation->messages();
	}
	
}
