<?php

require_once '../includes/definitions.inc.php';
require_once '../config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

if ($_ACTION == "checkCart") {

    $add_to_cart_id = (isset($_POST['addToCartId']) && (!empty($_POST['addToCartId']))) ? strip_tags(htmlspecialchars(trim(($_POST['addToCartId'])))) : '';
    $check_cart = $_DB->prepare("SELECT * from " . TBL_CART . " WHERE id = :id");
    $check_cart->execute([
        ':id' => $add_to_cart_id
    ]);

    // CHECK DATA EXISTS OR NOT
    if ($check_cart->rowCount()) {
        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Food already added to cart"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "Food not exists"
        ]));
    }
}
