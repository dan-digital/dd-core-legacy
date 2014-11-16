@extends('layouts.admin')

@section('content')

	<h2>Dashboard</h2>
	<p>Welcome, {{ Auth::user()->username }} !</p>

@stop