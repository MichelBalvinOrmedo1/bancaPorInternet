<?php
/*
      Author  : Suresh Pokharel
      Email   : suresh.wrc@gmail.com
      GitHub  : github.com/suresh021
      URL     : psuresh.com.np
*/
?>

<?php 
session_start();
$result="";
if (isset($_POST['btnSend'])) {
	$userInput= strtolower($_POST['txtCaptcha']);
	if ($_SESSION['text']==$userInput) {
		$result="success";
	}else{
		$result="failed";
	}
}
 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Captcha Testing</title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="//code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">	<br><br>
	<div class="row">
		<div class="col-md-6  col-md-offset-3">
				<div class="col-md-2 ">
					<div id="imagearea" >
					<img class="image" src="image.php">
					
					</div>
				</div>
				<div class="col-md-10 ">
					<form method="POST" class="form">
						<input type="text" maxlength="4" style="width: 20%;display: inline;" name="txtCaptcha" id="inputCaptcha" class="form-control" value="" title="">
						<button type="submit" style="display: inline;" name="btnSend" class="btn btn-default">Send</button>
						<button type="button" title="Generate new captcha" onclick="reloadCaptcha();" class="btn btn-default btn-sm">
	          			<span class="glyphicon glyphicon-refresh"></span>
	        			</button>
					</form>
					<div class="result">
						<?php 
						if ($result=="success") {
							echo "Captcha matched";
						}else if($result=="failed"){
						 	echo "Captcha Test Failed";
						}?>
					</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>

<style>
	.image{
		border-style: dotted;
    	border-color: black;
    	border-width: 1px;
	}

	.form{
		margin: 0;
		padding: 0;
	}
</style>


<script>

function reloadCaptcha(){
	console.log("button clicked");
	$.ajax({
        url:'image.php',
        complete: function (response) {
          $("#imagearea").html("<img class='image' src='image.php'>");
		//( "loadimage.php");// to reload the todo list from database
          // $( "#spinner" ).remove();//remove spinner as task is completed
        },
    });
}
</script>
