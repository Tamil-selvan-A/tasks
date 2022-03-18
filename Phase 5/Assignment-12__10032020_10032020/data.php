<?php

// GET VALUES
$name = isset($_POST["name"]) && !empty($_POST["name"]) ? $_POST["name"] : '0';
$salary = isset($_POST["salary"]) && !empty($_POST["salary"]) ? $_POST["salary"] : '0';
$hra = isset($_POST["hra"]) && !empty($_POST["hra"]) ? $_POST["hra"] : '0';
$da = isset($_POST["da"]) && !empty($_POST["da"]) ? $_POST["da"] : '0';
$pf = ($salary + $da) * 0.12;
$esi = $salary * 0.0075;
$net_salary = ($salary - ($esi + $pf)) + $hra + $da;

include 'includes/header.inc.php';
include 'includes/navbar.inc.php';
?>

<!--========== TABLE SECTION ==========-->
<h4 class="text-center text-white mt-4">SALARY SLIP</h4>
<section class="p-3 p-md-5 table-responsive">
    <table class="table table-light table-striped table-bordered">
        <tr>
            <th>Name</th>
            <td> <?php echo $name;  ?> </td>
        </tr>
        <tr>
            <th>Basic salary</th>
            <td> <?php echo $salary;  ?> </td>
        </tr>
        <tr>
            <th>HRA</th>
            <td> <?php echo $hra;  ?> </td>
        </tr>
        <tr>
            <th>DA</th>
            <td> <?php echo $da;  ?> </td>
        </tr>
        <tr>
            <th>ESI</th>
            <td> <?php echo $esi;  ?> </td>
        </tr>
        <tr>
            <th>PF</th>
            <td> <?php echo $pf;  ?> </td>
        </tr>
        <tr>
            <th>NET Salary</th>
            <td> <?php echo $net_salary;  ?> </td>
        </tr>
    </table>
</section>
<!--========== END TABLE SECTION ==========-->

<?php 
 include 'includes/footer.inc.php';
?>