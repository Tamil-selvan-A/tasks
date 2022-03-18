<?php 

$connection = mysqli_connect("localhost", "root", "", "employee_details");

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>