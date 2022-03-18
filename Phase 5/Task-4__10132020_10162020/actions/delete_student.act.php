<?php

require_once '../includes/definitions.inc.php';
include_once '../config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

// DELETE STUDENT
if ($_ACTION == "deleteStudent") {

    $delete_id = (isset($_POST['deleteId']) && (!empty($_POST['deleteId']))) ? strip_tags(htmlspecialchars(trim(($_POST['deleteId'])))) : '';

    $delete = "DELETE FROM " . TBL_STUDENTS . " WHERE student_id = :delete_id";
    $delete_student = $_DB->prepare($delete);
    $delete_student->execute([ ':delete_id' => $delete_id ]);
    
    if ($delete_student->rowCount()) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Student deleted successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "Unable to delete student"
        ]));
    }
}
