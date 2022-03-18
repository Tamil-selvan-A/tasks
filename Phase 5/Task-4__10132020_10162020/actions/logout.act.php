<?php 

include_once '../_init.php';
$_SESSION['is_authenticated'] = FALSE;

session_destroy();
header("location:../index.php");

