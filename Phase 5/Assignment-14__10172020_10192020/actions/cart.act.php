<?Php
require_once '../includes/definitions.inc.php';
require_once '../config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

// REMOVE FROM CART
if ($_ACTION == "removeFromCart") {

    $remove_from_cart_id = (isset($_POST['removeFromCartId']) && (!empty($_POST['removeFromCartId']))) ? strip_tags(htmlspecialchars(trim(($_POST['removeFromCartId'])))) : '';

    // REMOVE FROM DATABASE
    $remove = "DELETE FROM " . TBL_CART . " WHERE id = :delete_id";

    $remove_from_cart = $_DB->prepare($remove);
    $remove_from_cart->execute([':delete_id' => $remove_from_cart_id]);

    // CHECK REMOVED OR NOT
    if ($remove_from_cart->rowCount()) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Food removed from cart"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "Unable to remove food from cart"
        ]));
    }
}

// UPDATE CART
if ($_ACTION == "updateCartQuantity") {

    $update_cart_quantity_id = (isset($_POST['updateCartQuantityId']) && (!empty($_POST['updateCartQuantityId']))) ? strip_tags(htmlspecialchars(trim(($_POST['updateCartQuantityId'])))) : '';
    $update_cart_quantity = (isset($_POST['updateCartQuantity']) && (!empty($_POST['updateCartQuantity']))) ? strip_tags(htmlspecialchars(trim(($_POST['updateCartQuantity'])))) : '';

    // UPDATE IN DATABASE
    $update = "UPDATE " . TBL_CART .
              " SET qty = '$update_cart_quantity' 
               WHERE id =  :id";

    $update_student = $_DB->prepare($update);
    $update_student->execute([':id' => $update_cart_quantity_id]);

    // CHECK DATA UPDATED OR NOT
    if ($update_student->rowCount()) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Quantity updated successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "failed to update quantity"
        ]));
    }
}
?>