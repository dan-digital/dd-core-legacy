<!DOCTYPE html>
<html ng-app="DD">
<head>
	<meta charset="utf-8">
	<title>@yield('title', ucfirst(Request::segment(2)).' | DanDigital Admin')</title>
	@include('includes.admin.meta-tags')
	@include('includes.admin.style-tags')
	@include('includes.admin.head-script-tags')
</head>
<body>

	<header id="mainHeader">
		<h1>DanDigital Admin</h1>
		<a id="logout" href="/admin/logout">Logout</a>
	</header>

	<nav id="mainNav">
		{{ HTML::ddMenuItem('dashboard', 'Dashboard') }}
		{{ HTML::ddMenuItem('users', 'Users') }}
	</nav>

	<main>
		@yield('content')
	</main>

	@include('includes.admin.script-tags')

</body>
</html>