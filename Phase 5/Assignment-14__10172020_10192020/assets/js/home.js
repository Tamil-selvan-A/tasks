$(document).ready(function () {

    var addToCartId, addToCartName, addToCartImg, addToCartPrice;

    // LOAD CART SECTION
    $('#main-container').load('products.php');
    $('#cart-button').on('click', function () {
        $('#main-container').load('cart.php')
    })

    // LOAD PRODUCTS SECTION
    $('#home-button').on('click', function () {
        $('#main-container').load('products.php');
    })

    // ADD TO CART BUTTON CLICK EVENT
    $(document).on('click', '.add-to-cart', function () {

        addToCartId = $(this).attr('id');
        addToCartName = $(this).prevAll('.name').html();
        addToCartImg = $(this).parent().prev().attr('src');
        addToCartPrice = $(this).parent().next().find('.price').html();

        checkCart();
    })

    // CHECK THE PRODUCT ALREADY EXISTS IN CART OR NOT
    function checkCart() {
        $.ajax({
            url: 'functions/prevent-duplicate-cart.fn.php',
            type: 'POST',
            data: 'action=checkCart' +
                '&addToCartId=' + addToCartId,
            dataType: 'JSON'
        }).done(function (response) {
            if (response['status'] == 'Success') {

                toastr.info(response['message']);
            }
            else {
                addToCart();
            }

        }).fail(function (error) {
            console.log(error);
            toastr.info('Failed to check cart');
        })
    }

    // ADD ITEM TO CART 
    function addToCart() {
        $.ajax({
            url: 'actions/add-to-cart.act.php',
            type: 'POST',
            data: 'action=addToCart' +
                '&addToCartId=' + addToCartId +
                '&addToCartImg=' + addToCartImg +
                '&addToCartName=' + addToCartName +
                '&addToCartPrice=' + addToCartPrice,
            dataType: 'JSON'
        }).done(function (response) {
            if (response['status'] == 'Success') {
                toastr["success"](response['message'], "Message");
            }
            else {
                toastr.info('Failed to add cart');
            }

        }).fail(function (error) {
            console.log(error);
            toastr.info('Error while adding food');
        })
    }

    // REMOVE BUTTON CLICK EVENT
    $(document).on('click', '.remove-button', function () {

        var removeFromCartId = $(this).attr('id');

        // REMOVE CART ITEM CONFIRMATION
        $.confirm({
            title: 'Message',
            content: 'Are you really want to remove ?',
            autoClose: 'cancelAction|8000',
            buttons: {
                deleteUser: {
                    text: 'delete',
                    action: function () {
                        removeFromCart();
                    }
                },
                cancelAction: function () {
                    $.alert('Food not removed from cart');
                }
            }
        });

        // REMOVE FOOD FROM CART AND DB
        function removeFromCart() {
            $.ajax({
                url: 'actions/cart.act.php',
                type: 'POST',
                data: 'action=removeFromCart' +
                    '&removeFromCartId=' + removeFromCartId,
                dataType: 'JSON'
            }).done(function (response) {
                if (response['status'] == 'Success') {
                    toastr["success"](response['message'], "Message");
                    $('#main-container').load('cart.php')
                }
                else {
                    toastr.info('Failed to remove food');
                }
            }).fail(function (error) {
                console.log(error);
                toastr.info('Error while removing food');
            })
        }
    })

    // FIND TOTAL PRICE IN CART
    function findCartTotal() {

        var cartTotal = 0;

        $('tbody > tr').each(function () {

            var quantity = $(this).find('.quantity-input').val();
            var price = $(this).find('.cart-price').html();
            var rowTotal = (quantity * price);

            cartTotal += rowTotal;
        })

        $('#cart-total').text(cartTotal);
    }

    // FIND CART TOTAL WHEN QUANTITY CHANGED
    $(document).on('change', '.quantity-input', function () {
        findCartTotal();
    })

    // UPDATE CART QUANTITY TO DATABASE
    $(document).on('blur', '.quantity-input', function () {

        var updateCartQuantityId = $(this).parent().prev().find('.remove-button').attr('id');
        var updateCartQuantity = $(this).val();

        $.ajax({
            url: 'actions/cart.act.php',
            type: 'POST',
            data: 'action=updateCartQuantity' +
                '&updateCartQuantityId=' + updateCartQuantityId +
                '&updateCartQuantity=' + updateCartQuantity,
            dataType: 'JSON'
        }).done(function (response) {
            if (response['status'] == 'Success') {
                toastr.info(response['message']);
                $('#main-container').load('cart.php')
            }
            else {
                toastr.info('Quantity not changed');
            }
        }).fail(function (error) {
            console.log(error);
            toastr.info('Error while updating Quantity');
        })
    })

    // TOASTER OPTIONS
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "preventDuplicates": true,
        "timeOut": "2000"
    }
})