<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>DanDigital Core</title>
	@include('includes.admin.style-tags')
	<style>

		body {
			text-align:center;
		}

		.welcome {
			width: 300px;
			height: 200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -100px;
		}

		a, a:visited {
			text-decoration:none;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 10px 0;
			font-weight: 200;
		}
	</style>
</head>
<body>
	<div class="welcome">
		<img src="/images/dd/dd_icon.png" alt="DD Core">
		<h1>DanDigital <span class="ddBlue">Core</span></h1>
	</div>
</body>
</html>
