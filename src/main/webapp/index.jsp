<!DOCTYPE html>
<html ng-app="MyApp">
<head>
<meta charset="ISO-8859-1">
<title>User Management - Home</title>


<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="scripts/jquery-1.8.3.js"></script>
<script src="scripts/angular.js"></script>
<script src="scripts/angular-route.js"></script>

<script src="js/demo.js"></script>
<script src="js/service.js"></script>
</head>
<body>
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">User Management</a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active"><a href="#Home">Home</a></li>
			<li><a href="#Create">Create</a></li>
			<li><a href="#Delete">Delete</a></li>
			<li><a href="#Update">Update</a></li>
		</ul>
		
		<div ng-view ></div>
	</div>

</body>
</html>