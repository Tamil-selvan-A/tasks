<?php 

// CONNECT TO DATABASE
$connection = mysqli_connect("localhost", "root", "", "students_details");

// CHECK CONNECTED OR NOT
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

?>