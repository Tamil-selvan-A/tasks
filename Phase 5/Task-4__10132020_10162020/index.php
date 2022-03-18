<?php

// INCLUDE HEADER AND CONFIG FILES
include_once 'config/dbconnection.config.php';
include_once 'includes/header.inc.php';

?>

<!--========== CUSTOM CSS ==========-->
<link rel="stylesheet" href="assets/css/login.css">
<?php include_once 'includes/header_bottom.inc.php'; ?>

<!--========== FORM SECTION ==========-->
<section class="text-center p-5 overlay">
    <h4 class="text-white my-5">LOGIN FORM</h4>
    <form action="contacts.php" class="mx-auto" id="form">
        <i class="fas fa-users text-warning fa-6x mb-5"></i>
        <input type="text" name="uname" class="form-control rounded-pill px-4" placeholder="Username">
        <small class="uname-error text-white text-left mb-4 py-2 px-3 d-block"></small>
        <input type="password" name="password" class="form-control rounded-pill px-4" placeholder="Password">
        <small class="password-error text-white text-left mb-4 py-2 px-3 d-block"></small>
        <input type="submit" value="LOGIN" class="btn btn-warning rounded-pill px-5 font-weight-bold">
    </form>
</section>
<!--========== END FORM SECTION ==========-->

<!--========== INCLUDE FOOTER LINKS ==========-->
<?php include_once 'includes/footer.inc.php'; ?>
<!--========== CUSTOM JAVASCRIPT ==========-->
<script src="assets/js/login.js"></script>
<!--========== INCLUDE FOOTER ==========-->
<?php include_once 'includes/footer_bottom.inc.php'; ?>