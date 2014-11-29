@extends('layouts.admin')

@section('content')
	
	<p><a href="/admin/users/create">New user +</a></p>

	<h2>Users</h2>

	<dd-users-table></dd-users-table>

@stop