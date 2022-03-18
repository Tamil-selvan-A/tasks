<?php

// CONFIG FILES
include_once 'includes/config.inc.php';

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

if (($_ACTION == "addStudent") || ($_ACTION == "updateStudent")) {

    $name = (isset($_POST['name']) && (!empty($_POST['name']))) ? mysqli_real_escape_string($connection, $_POST['name']) : '';
    $reg_no = (isset($_POST['reg-no']) && (!empty($_POST['reg-no']))) ? mysqli_real_escape_string($connection, $_POST['reg-no']) : '';
    $mark_one = (isset($_POST['mark-one']) && (!empty($_POST['mark-one']))) ? mysqli_real_escape_string($connection, $_POST['mark-one']) : '';
    $mark_two = (isset($_POST['mark-two']) && (!empty($_POST['mark-two']))) ? mysqli_real_escape_string($connection, $_POST['mark-two']) : '';
    $mark_three = (isset($_POST['mark-three']) && (!empty($_POST['mark-three']))) ? mysqli_real_escape_string($connection, $_POST['mark-three']) : '';
    $total = $mark_one + $mark_two + $mark_three;
}

if ($_ACTION == "addStudent") {

    // INSERT DATA TO DATABASE
    $add = "INSERT INTO students (name, reg_no, mark_one, mark_two, mark_three, total) 
            VALUES ('$name', $reg_no, $mark_one, $mark_two, $mark_three, $total)";

    // CHECK DATA INSERTER OR NOT
    if (mysqli_query($connection, $add)) {

        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Student added successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Unable to add student"
        ]));
    }
}

// DELETE STUDENT
if ($_ACTION == "deleteStudent") {

    $delete_id = (isset($_POST['deleteId']) && (!empty($_POST['deleteId']))) ? mysqli_real_escape_string($connection, $_POST['deleteId']) : '';

    $delete = "DELETE FROM students WHERE student_id = $delete_id";

    if (mysqli_query($connection, $delete)) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Student deleted successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Unable to delete student"
        ]));
    }
}

// UPDATE STUDENT
if ($_ACTION == "updateStudent") {

    $update_id = $_POST['updateId'];
    $update_id = (isset($_POST['updateId']) && (!empty($_POST['updateId']))) ? mysqli_real_escape_string($connection, $_POST['updateId']) : '';

    // UPDATE IN DATABASE
    $update = "UPDATE students 
               SET name = '$name', reg_no = $reg_no, mark_one = $mark_one, mark_two = $mark_two, mark_three = $mark_three 
               WHERE student_id =  $update_id";

    // CHECK DATA UPDATED OR NOT
    if (mysqli_query($connection, $update)) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Student updated successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Student update failed"
        ]));
    }
}
?>