<?php

require_once '../includes/definitions.inc.php';
include_once '../config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

$name = (isset($_POST['name']) && (!empty($_POST['name']))) ? strip_tags(htmlspecialchars(trim(($_POST['name'])))) : '';
$reg_no = (isset($_POST['reg-no']) && (!empty($_POST['reg-no']))) ? strip_tags(htmlspecialchars(trim(($_POST['reg-no'])))) : '';
$mark_one = (isset($_POST['mark-one']) && (!empty($_POST['mark-one']))) ? strip_tags(htmlspecialchars(trim(($_POST['mark-one'])))) : '';
$mark_two = (isset($_POST['mark-two']) && (!empty($_POST['mark-two']))) ? strip_tags(htmlspecialchars(trim(($_POST['mark-two'])))) : '';
$mark_three = (isset($_POST['mark-three']) && (!empty($_POST['mark-three']))) ? strip_tags(htmlspecialchars(trim(($_POST['mark-three'])))) : '';
$total = $mark_one + $mark_two + $mark_three;

// UPDATE STUDENT
if ($_ACTION == "updateStudent") {

    $update_id = $_POST['updateId'];
    $update_id = (isset($_POST['updateId']) && (!empty($_POST['updateId']))) ? strip_tags(htmlspecialchars(trim(($_POST['updateId'])))) : '';

    // UPDATE IN DATABASE
    $update = "UPDATE " . TBL_STUDENTS .
               " SET name = '$name', reg_no = $reg_no, mark_one = $mark_one, mark_two = $mark_two, mark_three = $mark_three 
               WHERE student_id =  :student_id";

    $update_student = $_DB->prepare($update);
    $update_student->execute([':student_id' => $update_id]);

    // CHECK DATA UPDATED OR NOT
    if ($update_student->rowCount()) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Student updated successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "Student update failed"
        ]));
    }
}