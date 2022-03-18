<!--========== PHP STARTS ==========-->
<?php

// INCLUDE HEADER AND CONFIG FILES
include_once 'includes/config.inc.php';
include_once 'includes/header.inc.php';

?>
<!--========== PHP ENDS ==========-->
<section class="d-flex">
    <!--========== SECTION ==========-->
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
    <!--========== END SECTION ==========-->

    <!--========== SECTION ==========-->
    <div class="w-100 p-4">
        <h4 class="text-white text-center mt-4 mb-5">STUDENT MARK LIST</h4>
        <button class="btn btn-success m-3 add-student px-5">ADD STUDENT</button>
        <div class="table-responsive table-container">

        </div>
    </div>
    <!--========== END SECTION ==========-->
</section>

<!--========== INCLUDE FOOTER LINKS ==========-->
<?php include_once 'includes/footer.inc.php'; ?>