<?php

// INCLUDE HEADER AND CONFIG FILES
include '_init.php';

if (!($_SESSION['is_authenticated'])) {
    header("location:index.php");
}

include_once 'includes/header.inc.php';

?>

<!--========== CUSTOM CSS ==========-->
<link rel="stylesheet" href="assets/css/students.css">
<?php include_once 'includes/header_bottom.inc.php'; ?>
<?php include_once 'includes/navbar.inc.php'; ?>

<!--========== STUDENTS SECTION ==========-->
<section class="d-flex">

    <!--========== STUDENTS FORM ==========-->
    <div class="form-container pt-5">
        <h5 class="text-white text-center mb-4 form-title"></h5>
        <form id="form" method="POST">
            <div class="mb-4">
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter Name">
                <small class="text-secondary py-2 d-block" id="name-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" name="reg-no" id="reg-no" class="form-control number" placeholder="Enter Reg No">
                <small class="text-secondary py-2 d-block" id="reg-no-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" name="mark-one" id="mark-one" class="form-control number" placeholder="Enter Mark One">
                <small class="text-secondary py-2 d-block" id="mark-one-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" name="mark-two" id="mark-two" class="form-control number" placeholder="Enter Mark Two">
                <small class="text-secondary py-2 d-block" id="mark-two-error"></small>
            </div>
            <div class="mb-3">
                <input type="text" name="mark-three" id="mark-three" class="form-control number" placeholder="Enter Mark Three">
                <small class="text-secondary py-2 d-block" id="mark-three-error"></small>
            </div>
            <div class="text-center">
                <input type="submit" class="btn btn-success my-3 px-5 form-button" id="submit" value="ADD STUDENT">
                <button class="btn btn-success my-3 form-button" id="update">UPDATE</button>
            </div>
        </form>
    </div>
    <!--========== END STUDENTS FORM ==========-->

    <!--========== STUDENTS TABLE ==========-->
    <div class="w-100 p-4">
        <h4 class="text-white text-center mt-4 mb-5">STUDENTS MARK LIST</h4>
        <div class="table-responsive table-container">
                <!-- STUDENTS TABLE -->
        </div>
    </div>
    <!--========== END STUDENTS TABLE ==========-->
</section>
<!--========== END STUDENTS SECTION ==========-->

<!--========== INCLUDE FOOTER LINKS ==========-->
<?php include_once 'includes/footer.inc.php'; ?>
<!--========== CUSTOM JAVASCRIPT ==========-->
<script src="assets/js/students.js"></script>
<!--========== INCLUDE FOOTER LINKS ==========-->
<?php include_once 'includes/footer_bottom.inc.php'; ?>