<!--========== PHP STARTS ==========-->
<?php
include 'includes/header.inc.php';
include 'includes/config.inc.php';
?>
<!--========== PHP ENDS ==========-->

<!--========== MAIN ==========-->
<main class="p-3 px-4 d-flex justify-content-between align-items-start">
    <!--========== SECTION ==========-->
    <section class="form mx-auto col-lg-4 px-0">
        <h4 class="text-center py-4">EMPLOYEES FORM</h4>
        <form method="post" class="p-4 shadow" id="form">
            <div class="mb-4">
                <input type="text" class="form-control name" name="name" id="name" placeholder="Enter Employee Name">
                <small class="name-error"></small>
            </div>
            <div class="mb-4">
                <label>Date of Joining</label>
                <input type="date" class="form-control doj" id="doj" name="doj">
                <small class="doj-error"></small>
            </div>
            <div class="mb-4">
                <label>Date of Birth</label>
                <input type="date" class="form-control dob" id="dob" name="dob">
                <small class="dob-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" class="form-control number salary" id="basic-salary" name="basic_salary" placeholder="Enter Basic Salary">
                <small class="salary-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" class="form-control number hra" id="hra" name="hra" placeholder="Enter HRA">
                <small class="hra-error"></small>
            </div>
            <div class="mb-4">
                <input type="text" class="form-control number da" name="da" id="da" placeholder="Enter DA">
                <small class="da-error"></small>
            </div>
            <div class="text-center">
                <input type="submit" value="SUBMIT" class="btn btn-light px-5" id="submit">
                <input type="button" value="UPDATE" class="btn btn-light px-5" id="update">
            </div>
        </form>
    </section>
    <!--========== END SECTION ==========-->

    <!--========== TABLE SECTION ==========-->
    <section class="col-lg-8">
        <div class="table-responsive pl-3 table-container">

        </div>
    </section>
    <!--========== END TABLE SECTION ==========-->
</main>
<!--========== END MAIN ==========-->
<?php include 'includes/footer.inc.php'; ?>