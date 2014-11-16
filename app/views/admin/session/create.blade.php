<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>DD Admin</title>
</head>
<body>

	{{ Form::open(['route' => 'admin.session.store']) }}
		
		{{ Form::label('username', 'Username: ') }}
		{{ Form::text('username') }}

		{{ Form::label('password', 'Password: ') }}
		{{ Form::password('password') }}

		{{ Form::submit('Login') }}

	{{ Form::close() }}

</body>
</html>