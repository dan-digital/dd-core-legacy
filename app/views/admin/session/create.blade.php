<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>DD Admin</title>
	@include('includes.admin.meta-tags')
	@include('includes.admin.style-tags')
	<style>
		form {
			width: 400px;
			margin: 150px auto 0 auto;
		}
	</style>
	@include('includes.admin.head-script-tags')
</head>
<body>

	{{ Form::open(['route' => 'admin.session.store']) }}
		
		<section>
			<h2>Login Details</h2>
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
				{{ Form::submit('LOGIN') }}
				@if (Session::has('login_error'))
					<span class="errorMessage">{{ Session::get('login_error') }}</span>
				@endif
			</p>
		</section>

	{{ Form::close() }}

</body>
</html>