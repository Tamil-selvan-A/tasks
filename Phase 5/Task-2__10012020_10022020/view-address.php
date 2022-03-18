<?php
include 'includes/header.inc.php';
include 'includes/nav.inc.php';

$address_name = $_POST["address-name"];
$address_email = $_POST["address-email"];
$address_mobile = $_POST["address-mobile"];
$door_number = $_POST["door-number"];
$street = $_POST["street"];
$village = $_POST["village"];
$district = $_POST["district"];
$pin = $_POST["pin"];

?>

<!--========== VIEW ADDRESS SECTION ==========-->
<div class="text-center p-5 m-3 shadow border">
    <i class="fas fa-user fa-6x text-success"></i>
    <table class="table table-striped table-bordered my-4">
        <tr>
            <th>Name</th>
            <td><?php echo $address_name?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo $address_email?></td>
        </tr>
        <tr>
            <th>Mobile</th>
            <td><?php echo $address_mobile?></td>
        </tr>
        <tr>
            <th>Door Number</th>
            <td><?php echo $door_number?></td>
        </tr>
        <tr>
            <th>Street</th>
            <td><?php echo $street?></td>
        </tr>
        <tr>
            <th>Village</th>
            <td><?php echo $village?></td>
        </tr>
        <tr>
            <th>District</th>
            <td><?php echo $district?></td>
        </tr>
        <tr>
            <th>PIN Number</th>
            <td><?php echo $pin?></td>
        </tr>
    </table>
</div>
<!--========== END VIEW ADDRESS SECTION ==========-->

<?php
include 'includes/footer.inc.php';
?>