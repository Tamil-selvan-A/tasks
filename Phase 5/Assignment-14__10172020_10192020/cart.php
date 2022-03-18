<?php

require_once 'includes/definitions.inc.php';
require_once 'config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$get_cart = $_DB->prepare("SELECT * from " . TBL_CART . "");
$get_cart->execute();

?>

<h5 class="mt-5 mb-4 border-bottom pb-3">YOUR CART</h5>

<!--========== CART SECTION ==========-->
<div class="table-responsive">
    <table class="table table-striped text-center table-borderless cart">
        <thead class="bg-success text-white">
            <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>REMOVE</th>
                <th>QTY</th>
                <th>PRICE ( Rs )</th>
            </tr>
        </thead>
        <tbody>
            <?php
            while ($get_cart_row = $get_cart->fetch(PDO::FETCH_ASSOC)) {
            ?>
                <tr>
                    <td><img src="<?php echo $get_cart_row["img"]; ?>" class="shadow img-thumbnail" alt="dosa"></td>
                    <td><?php echo $get_cart_row["name"]; ?></td>
                    <td><i class="fas fa-trash remove-button" id="<?php echo $get_cart_row["id"]; ?>"></i></td>
                    <td><input type="number" value="<?php echo $get_cart_row["qty"]; ?>" min="0" max="100" class="text-center border-0 quantity-input"></td>
                    <td class="cart-price"><?php echo $get_cart_row["price"]; ?></td>
                </tr>
            <?php  }; ?>
        </tbody>
        <tfoot class="bg-success text-white">
            <tr>
                <td colspan="4" class="text-right">TOTAL Rs : </td>
                <td id="cart-total"></td>
            </tr>
        </tfoot>
    </table>
</div>
<script src="assets/js/cart.js"></script>
<!--========== END CART SECTION ==========-->