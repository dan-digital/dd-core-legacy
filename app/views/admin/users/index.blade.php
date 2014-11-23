@extends('layouts.admin')

@section('content')
	
	<p><a href="/admin/users/create">New user +</a></p>

	<h2>Users</h2>

	<table>
		<thead>
			<tr>
				<th>Username</th>
				<th>Options</th>
			</tr>
		</thead>
		<tbody>
			@foreach($users as $user)
				<tr>
					<td>{{ $user->username }}</td>
					<td>
						<dd-confirm-link question="Are you sure you want to remove {{ $user->username }}?">remove</dd-confirm-link>
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>

@stop