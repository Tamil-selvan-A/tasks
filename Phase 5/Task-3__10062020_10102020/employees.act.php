<?php
include 'includes/config.inc.php';

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';


if (($_ACTION == "addEmployee") || ($_ACTION == "deleteEmployee")) {

    $name = (isset($_POST['name']) && (!empty($_POST['name']))) ? mysqli_real_escape_string($connection, $_POST['name']) : '';
    $doj_date = (isset($_POST['doj']) && (!empty($_POST['doj']))) ? strtotime($_POST["doj"]) : '';
    $dob_date = (isset($_POST['dob']) && (!empty($_POST['dob']))) ? strtotime($_POST["dob"]) : '';
    $doj = mysqli_real_escape_string($connection, date("Y/m/d", $doj_date));
    $dob = mysqli_real_escape_string($connection, date("Y/m/d", $dob_date));
    $basic_salary = (isset($_POST['basic_salary']) && (!empty($_POST['basic_salary']))) ? mysqli_real_escape_string($connection, $_POST["basic_salary"]) : '';
    $hra = (isset($_POST['hra']) && (!empty($_POST['hra']))) ? mysqli_real_escape_string($connection, $_POST["hra"]) : '';
    $da = (isset($_POST['da']) && (!empty($_POST['da']))) ? mysqli_real_escape_string($connection, $_POST["da"]) : '';
    $esi = round($basic_salary * 0.0075);
    $pf = round(($basic_salary + $da) * 0.12);
    $net_salary = round(($basic_salary - ($esi + $pf)) + $hra + $da);
}

// ADD EMPLOYEE
if ($_ACTION == "addEmployee") {

    // INSERT DATA TO DATABASE
    $add = "INSERT INTO employees (name, doj, dob, basic_salary, hra, da, esi, pf, net_salary) 
            VALUES ('$name', '$doj', '$dob', $basic_salary, $hra, $da, $esi, $pf, $net_salary)";

    // CHECK DATA INSERTER OR NOT
    if (mysqli_query($connection, $add)) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Employee added successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Employee add failed"
        ]));
    }
}

// DELETE EMPLOYEE
if ($_ACTION == "deleteEmployee") {

    $delete_id = (isset($_POST['delId']) && (!empty($_POST['delId']))) ? mysqli_real_escape_string($connection, $_POST['delId']) : '';
    $delete = "DELETE FROM employees WHERE employee_id = $delete_id";

    if (mysqli_query($connection, $delete)) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Employee deleted successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Employee delete failed"
        ]));
    }
}

// UPDATE EMPLOYEE
if ($_ACTION == "updateEmployee") {

    $update_id = (isset($_POST['updateId']) && (!empty($_POST['updateId']))) ? mysqli_real_escape_string($connection, $_POST['updateId']) : '';

    $update = "UPDATE employees 
               SET name = '$name', doj = '$doj', dob = '$dob', basic_salary = $basic_salary, hra = $hra,
               da = $da, net_salary = $net_salary  
               WHERE employee_id =  $update_id";

    // CHECK DATA UPDATED OR NOT
    if (mysqli_query($connection, $update)) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Employee updated successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '200',
            "message"   => "Employee update failed"
        ]));
    }
}
