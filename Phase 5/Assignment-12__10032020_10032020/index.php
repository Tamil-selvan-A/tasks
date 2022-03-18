<?php
include 'includes/header.inc.php';
?>

<!--========== PAYSLIP SECTION ==========-->
<section class="py-3">
    <h4 class="text-center m-5 text-white">PAYSLIP FORM</h4>
    <form action="data.php" method="post" class="mx-auto shadow rounded px-4 py-5">
        <div class="form-group mb-5">
            <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name">
            <small class="form-text text-muted name-error"></small>
        </div>
        <div class="form-group mb-5">
            <input type="text" class="form-control number" name="salary" id="salary" placeholder="Enter basic salary">
            <small class="form-text text-muted salary-error"></small>
        </div>
        <div class="form-group mb-5">
            <input type="text" class="form-control number" name="hra" id="hra" placeholder="Enter HRA">
            <small class="form-text text-muted hra-error"></small>
        </div>
        <div class="form-group">
            <input type="text" class="form-control number" name="da" id="da" placeholder="Enter DA">
            <small class="form-text text-muted da-error"></small>
        </div>
        <input type="submit" value="SUBMIT" class="btn rounded text-dark px-5 mt-5 d-block mx-auto submit">
    </form>
</section>
<!--========== END PAYSLIP SECTION ==========-->

<?php
include 'includes/footer.inc.php';
?>