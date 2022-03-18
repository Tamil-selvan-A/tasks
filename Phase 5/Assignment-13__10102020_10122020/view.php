<?php

include_once 'includes/config.inc.php';

$sql = "SELECT * FROM students";
$result = mysqli_query($connection, $sql);

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
        while ($row = mysqli_fetch_assoc($result)) {
        ?>
            <tr>
                <td><?php echo $row["name"]; ?></td>
                <td><?php echo $row["reg_no"]; ?></td>
                <td><?php echo $row["mark_one"]; ?></td>
                <td><?php echo $row["mark_two"]; ?></td>
                <td><?php echo $row["mark_three"]; ?></td>
                <td><?php echo $row["total"]; ?></td>
                <td>
                     <a href="#" class="text-secondary"><i class="fas fa-trash px-2" id="<?php echo $row["student_id"]; ?>"></i></a>
                     <a href="#" class="text-secondary"><i class="fas fa-edit px-2" id="<?php echo $row["student_id"]; ?>"></i></a>
                 </td>
            </tr>
        <?php  }; ?>
    </tbody>
</table>