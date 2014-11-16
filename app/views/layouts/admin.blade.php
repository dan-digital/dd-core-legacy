<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>DD Admin</title>
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
		<a class="active" href="/admin/dashboard">Dashboard</a>
		<a href="/admin/users">Users</a>
	</nav>

	<main>
		@yield('content')
	</main>

	@include('includes.admin.script-tags')

</body>
</html>