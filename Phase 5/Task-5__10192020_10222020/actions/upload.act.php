<?php

require_once '../config/dbconnection.config.php';
require_once '../includes/definitions.inc.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

// EXIT IF POST METHOD NOT USED
if (empty($_SERVER['REQUEST_METHOD']) || ($_SERVER['REQUEST_METHOD'] != 'POST')) {
    exit(json_encode([
        "status"    => 'Error',
        "code"      => '400.1',
        "message"   => "Bad Request."
    ]));
}

// CHECK FILE INFO 
if (isset($_FILES['file']) && (!(empty($_FILES['file'])))) {

    //  GET FILE DETAILS
    $path = '../uploads/'; // UPLOAD FILES HERE
    $name = $_FILES['file']['name']; //ORIGINAL FILE NAME
    $tmp_name = $_FILES['file']['tmp_name']; //TEMP FILE NAME
    $new_name = $path . $name; // NEW FILE NAME

    //  GET FORM DETAILS
    $full_name = (isset($_POST['name']) && (!empty($_POST['name']))) ? strip_tags(htmlspecialchars(trim(($_POST['name'])))) : '';
    $email = (isset($_POST['email']) && (!empty($_POST['email']))) ? strip_tags(htmlspecialchars(trim(($_POST['email'])))) : '';
    $mobile = (isset($_POST['mobile']) && (!empty($_POST['mobile']))) ? strip_tags(htmlspecialchars(trim(($_POST['mobile'])))) : '';
    $username = (isset($_POST['name']) && (!empty($_POST['username']))) ? strip_tags(htmlspecialchars(trim(($_POST['username'])))) : '';
    $password = (isset($_POST['password']) && (!empty($_POST['password']))) ? strip_tags(htmlspecialchars(trim(($_POST['password'])))) : '';


    try {
        // MOVE FILE FROM TEMP FOLDER TO UPLOADS FOLDER
        move_uploaded_file($tmp_name, $path . $name);
        
        // INSERT DATA TO DATABASE
        $add = "INSERT INTO " . TBL_USERS . "(name, email, mobile, username, password, photo) 
                VALUES (:name, :email, :mobile, :username, :password, :photo)";

        $add_user = $_DB->prepare($add);

        $add_user->execute([
            ':name' => $full_name,
            ':email' => $email,
            ':mobile' => $mobile,
            ':username' => $username,
            ':password' => $password,
            ':photo' => $name
        ]);

        echo 'file uploaded Successfully ';
    } catch (Exception $e) {
        echo 'file not uploaded <br>';
        echo ($e->getMessage());
    }
}
?>