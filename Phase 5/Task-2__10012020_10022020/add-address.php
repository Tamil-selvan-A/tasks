<?php
include 'includes/header.inc.php';
include 'includes/nav.inc.php';
?>

<!--========== ADDRESS SECTION ==========-->
<section class="bg-dark py-3">
    <h4 class="text-center text-white mb-4">ADDRESS BOOK</h4>
    <form action="view-address.php" method="post" class="mx-auto p-4 py-5 bg-white rounded shadow my-3 address-book">
        <div class="form-group">
            <label for="address-name">Name</label>
            <input type="text" class="form-control" name="address-name" id="address-name" placeholder="Enter name">
            <small class="form-text text-muted address-name-error"></small>
        </div>
        <div class="form-group">
            <label for="address-email">Email</label>
            <input type="email" class="form-control" name="address-email" id="address-email" placeholder="Enter Email">
            <small class="form-text text-muted address-email-error"></small>
        </div>
        <div class="form-group">
            <label for="address-mobile">Mobile</label>
            <input type="text" class="form-control number" name="address-mobile" id="address-mobile" placeholder="Enter Mobile Number">
            <small class="form-text text-muted address-mobile-error"></small>
        </div>
        <div class="form-group">
            <label for="door-number">Door No</label>
            <input type="text" class="form-control number" name="door-number" id="door-number" placeholder="Enter door number">
            <small class="form-text text-muted door-number-error"></small>
        </div>
        <div class="form-group">
            <label for="street">Street Name</label>
            <input type="text" class="form-control " name="street" id="street" placeholder="Enter street name">
            <small class="form-text text-muted street-error"></small>
        </div>
        <div class="form-group">
            <label for="village">Village Name</label>
            <input type="text" class="form-control" name="village" id="village" placeholder="Enter village name">
            <small class="form-text text-muted village-error"></small>
        </div>
        <div class="form-group">
            <label for="district">District</label>
            <input type="text" class="form-control" name="district" id="district" placeholder="Enter district">
            <small class="form-text text-muted district-error"></small>
        </div>
        <div class="form-group">
            <label for="pin">PIN Code</label>
            <input type="text" class="form-control number" name="pin" id="pin" placeholder="Enter PIN Number">
            <small class="form-text text-muted pin-error"></small>
        </div>
        <input type="submit" value="SUBMIT" class="btn btn-primary px-5 mx-auto d-block submit">
    </form>
</section>
<!--========== END ADDRESS SECTION ==========-->

<?php
include 'includes/footer.inc.php';
?>