<?php

require_once 'includes/definitions.inc.php';
require_once 'config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$get_product = $_DB->prepare("SELECT * from " . TBL_PRODUCTS . "");
$get_product->execute();

?>

<!--========== PRODUCTS SECTION ==========-->
<h5 class="mt-5 mb-4 border-bottom pb-3">VEG ITEMS</h5>
<div class="row">
    <?php
    while ($get_product_row = $get_product->fetch(PDO::FETCH_ASSOC)) {
    ?>
        <div class="col-lg-3 col-md-6 my-3">
            <div class="card shadow">
                <img src="<?php echo $get_product_row["img"]; ?>" class="card-img-top img" alt="dosa">
                <div class="card-body text-center">
                    <h5 class="card-title name"><?php echo $get_product_row["name"]; ?></h5>
                    <p class="my-3 text-secondary">Lorem ipsum dolor sit amet.</p>
                    <button class="btn btn-warning px-lg-4 rounded-pill font-weight-bold add-to-cart" id="<?php echo $get_product_row["id"]; ?>">ADD TO CART</button>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <p class="card-text mb-0">Rs : <span class="price"><?php echo $get_product_row["price"]; ?></span></p>
                    <div>
                        <i class="fas fa-star text-secondary"></i>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    <?php  }; ?>
</div>
<!--========== END PRODUCTS SECTION ==========-->