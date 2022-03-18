<?Php
require_once '../includes/definitions.inc.php';
require_once '../config/dbconnection.config.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

$_ACTION = (isset($_POST['action']) && (!empty($_POST['action']))) ? $_POST['action'] : '';

$add_to_cart_id = (isset($_POST['addToCartId']) && (!empty($_POST['addToCartId']))) ? strip_tags(htmlspecialchars(trim(($_POST['addToCartId'])))) : '';
$add_to_cart_img = (isset($_POST['addToCartImg']) && (!empty($_POST['addToCartImg']))) ? strip_tags(htmlspecialchars(trim(($_POST['addToCartImg'])))) : '';
$add_to_cart_name = (isset($_POST['addToCartName']) && (!empty($_POST['addToCartName']))) ? strip_tags(htmlspecialchars(trim(($_POST['addToCartName'])))) : '';
$add_to_cart_price = (isset($_POST['addToCartPrice']) && (!empty($_POST['addToCartPrice']))) ? strip_tags(htmlspecialchars(trim(($_POST['addToCartPrice'])))) : '';


if ($_ACTION == "addToCart") {
  
    // INSERT DATA TO DATABASE
    $add = "INSERT INTO " . TBL_CART . "(id, img, name, qty, price) 
     VALUES (:id, :img, :name, :qty, :price)";

    $add_to_cart = $_DB->prepare($add);

    $add_to_cart->execute([
        ':id' => $add_to_cart_id,
        ':img' => $add_to_cart_img,
        ':name' => $add_to_cart_name,
        ':qty' => 1,
        ':price' => $add_to_cart_price
    ]);

    // CHECK DATA INSERTER OR NOT
    if ($add_to_cart->rowCount()) {

        exit(json_encode([
            "status"    => 'Success',
            "code"      => '200',
            "message"   => "Food added to cart successfully"
        ]));
    } else {
        exit(json_encode([
            "status"    => 'Error',
            "code"      => '400',
            "message"   => "Unable to add Food"
        ]));
    }
}
