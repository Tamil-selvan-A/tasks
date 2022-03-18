 <?php
    include 'includes/config.inc.php';

    // SQL QUERY
    $sql = "select * from employees";
    $result = mysqli_query($connection, $sql);
    ?>

 <!-- CREATE TABLE -->
 <table class="table table-sm text-center bg-light table-striped">
     <thead class="bg-danger text-white">
         <tr>
             <th>NAME</th>
             <th>DOJ</th>
             <th>DOB</th>
             <th>BASIC SALARY</th>
             <th>HRA</th>
             <th>DA</th>
             <th>ESI</th>
             <th>PF</th>
             <th>NET SALARY</th>
             <th>ACTIONS</th>
         </tr>
     </thead>
     <tbody>
         <?php
            while ($row = mysqli_fetch_assoc($result)) {
            ?>
             <tr>
                 <td><?php echo $row["name"]; ?></td>
                 <td><?php echo $row["doj"]; ?></td>
                 <td><?php echo $row["dob"]; ?></td>
                 <td><?php echo $row["basic_salary"]; ?></td>
                 <td><?php echo $row["hra"]; ?></td>
                 <td><?php echo $row["da"]; ?></td>
                 <td><?php echo $row["esi"]; ?></td>
                 <td><?php echo $row["pf"]; ?></td>
                 <td><?php echo $row["net_salary"]; ?></td>
                 <td>
                     <a href="#" class="text-secondary"><i class="fas fa-trash px-2" id="<?php echo $row["employee_id"]; ?>"></i></a>
                     <a href="#" class="text-secondary"><i class="fas fa-edit px-2" id="<?php echo $row["employee_id"]; ?>"></i></a>
                 </td>
             </tr>
         <?php  }; ?>
     </tbody>
 </table>