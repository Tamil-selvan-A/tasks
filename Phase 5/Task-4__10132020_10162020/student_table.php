<?php
include '_init.php';

if (!($_SESSION['is_authenticated'])) {
    header("location:index.php");
}

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$get_student = $_DB->prepare("SELECT * from " . TBL_STUDENTS . "");
$get_student->execute();

?>

<table class="table text-white table-bordered text-center">
    <thead>
        <tr>
            <th>STUDENT NAME</th>
            <th>REG NO</th>
            <th>MARK ONE</th>
            <th>MARK TWO</th>
            <th>MARK THREE</th>
            <th>TOTAL</th>
            <th>ACTIONS</th>
        </tr>
    </thead>
    <tbody>
        <?php
        while ($get_student_row = $get_student->fetch(PDO::FETCH_ASSOC)) {
        ?>
            <tr>
                <td><?php echo $get_student_row["name"]; ?></td>
                <td><?php echo $get_student_row["reg_no"]; ?></td>
                <td><?php echo $get_student_row["mark_one"]; ?></td>
                <td><?php echo $get_student_row["mark_two"]; ?></td>
                <td><?php echo $get_student_row["mark_three"]; ?></td>
                <td><?php echo $get_student_row["total"]; ?></td>
                <td>
                    <a href="#" class="text-secondary"><i class="fas fa-trash px-2" id="<?php echo $get_student_row["student_id"]; ?>"></i></a>
                    <a href="#" class="text-secondary"><i class="fas fa-edit px-2" id="<?php echo $get_student_row["student_id"]; ?>"></i></a>
                </td>
            </tr>
        <?php  }; ?>
    </tbody>
</table>