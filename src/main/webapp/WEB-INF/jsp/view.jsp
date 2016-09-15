<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>User Management-View Form</title>

<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>

	<form class="form-horizontal">
		<fieldset>

			<!-- Form Name -->
			<legend>User Form</legend>

			<!-- Text input-->
			<div class="form-group">
				<label class="col-md-4 control-label" for="name">Name</label>
				<div class="col-md-5">
					<input id="name" name="name" type="text" placeholder="Name"
						class="form-control input-md" required="">

				</div>
			</div>

			<!-- Multiple Checkboxes (inline) -->
			<div class="form-group">
				<label class="col-md-4 control-label" for="skills">Skills</label>
				<div class="col-md-4">
					<label class="checkbox-inline" for="skills-0"> <input
						type="checkbox" name="skills" id="skills-0" value="java">
						Java
					</label> <label class="checkbox-inline" for="skills-1"> <input
						type="checkbox" name="skills" id="skills-1" value="cpp">
						C++
					</label> <label class="checkbox-inline" for="skills-2"> <input
						type="checkbox" name="skills" id="skills-2" value="php">
						PHP
					</label>
				</div>
			</div>

			<!-- Textarea -->
			<div class="form-group">
				<label class="col-md-4 control-label" for="textarea">Address</label>
				<div class="col-md-4">
					<textarea class="form-control" id="textarea" name="textarea"></textarea>
				</div>
			</div>

			<!-- Multiple Radios (inline) -->
			<div class="form-group">
				<label class="col-md-4 control-label" for="role">Role</label>
				<div class="col-md-4">
					<label class="radio-inline" for="role-0"> <input
						type="radio" name="role" id="role-0" value="admin"
						checked="checked"> Admin
					</label> <label class="radio-inline" for="role-1"> <input
						type="radio" name="role" id="role-1" value="non_admin">
						Non-admin
					</label>
				</div>
			</div>

			<!-- Select Basic -->
			<div class="form-group">
				<label class="col-md-4 control-label" for="age_group">Age
					Group</label>
				<div class="col-md-5">
					<select id="age_group" name="age_group" class="form-control">
						<option value="20-30">20-30</option>
						<option value="30-40">30-40</option>
						<option value="40-50">40-50</option>
						<option value="50-60">50-60</option>
					</select>
				</div>
			</div>

			<!-- Multiple Radios (inline) -->
			<div class="form-group">
				<label class="col-md-4 control-label" for="gender">Gender</label>
				<div class="col-md-4">
					<label class="radio-inline" for="gender-0"> <input
						type="radio" name="gender" id="gender-0" value="male"
						checked="checked"> Male
					</label> <label class="radio-inline" for="gender-1"> <input
						type="radio" name="gender" id="gender-1" value="female">
						Female
					</label>
				</div>
			</div>
		</fieldset>
	</form>


</body>
</html>