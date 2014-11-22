@extends('layouts.admin')

@section('content')
	
	<p><a href="/admin/users/">&lt; Back</a></p>

	{{ Form::open(['route' => 'admin.users.store']) }}
		
		<section>
			<h2>New User</h2>
			<p>
				{{ Form::label('username', 'Username') }}
				{{ Form::text('username') }}
				@if ($errors->first('username'))
					<span class="errorMessage">{{ $errors->first('username') }}</span>
				@endif
			</p>
			<p>
				{{ Form::label('password', 'Password') }}
				{{ Form::password('password') }}
				@if ($errors->first('password'))
					<span class="errorMessage">{{ $errors->first('password') }}</span>
				@endif
			</p>
		</section>
		<section>
			<p>
				{{ Form::submit('CREATE') }}
			</p>
		</section>

	{{ Form::close() }}

@stop