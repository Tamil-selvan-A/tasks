$(document).ready(function () {
    var cartTotal = 0;
    $('tbody > tr').each(function () {

        var quantity = $(this).find('.quantity-input').val();
        var price = $(this).find('.cart-price').html();
        var rowTotal = (quantity * price);

        cartTotal += rowTotal;
    })

    $('#cart-total').text(cartTotal);

})