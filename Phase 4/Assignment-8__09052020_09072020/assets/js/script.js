// GET BUTTONS AND INPUTS
var addToCart = document.getElementsByClassName('add-to-cart'),
    cartContainer = document.getElementById('cart-container');

var itemsArray = [];

// TO ADD THE ITEM TO THE CART
for (var i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', (e) => {

        // GET ITEM DETAILS
        var image = e.target.offsetParent.children[0].src,
            name = e.target.offsetParent.children[1].children[0].innerText,
            price = e.target.offsetParent.children[1].children[3].children[0].innerText,
            cartContainer = document.getElementById('cart-container');

        // TO CREATE NEW CART ITEM
        var cartItem =
            '<div class="d-flex cart align-items-center justify-content-center border-top p-3 cart-item">' +
            '<img src ="' + image + '" alt ="shopping item" class="img-fluid">' +
            '<p>' + name + '</p>' +
            '<p>' + 'Rs: <span class="cart-price">' + price + '</span></p>' +
            '<input type="number" value="1" min="1" class="form-control cart-quantity">' +
            '<i class="far fa-trash-alt ml-3 remove"></i>' +
            '</div>';

        // CREATE CART OBJECT
        var itemsObject = {
            Name: name,
            Image: image,
            Price: price
        }

        for (var item of itemsArray) {
            if (name == item.Name) {
                alert('This item already added to your cart');
                return;
            }
        }

        itemsArray.push(itemsObject);
        cartContainer.innerHTML += cartItem;
        cartTotal();

    })
}

// FUNCTION TO CALCULATE TOTAL AMOUNT IN CART
function cartTotal() {

    var cartContainer = document.getElementById('cart-container'),
        cartItem = cartContainer.getElementsByClassName('cart-item'),
        cartTotalAmount = document.getElementById('cart-total'),
        cartCount = document.getElementById('cart-count'),
        total = 0;

    // TO UPDATE THE CART COUNT IN HEADER
    cartCount.innerHTML = cartItem.length;

    // LOOP ALL PRICE AND INPUTS AND FIND TOTAL
    for (var i = 0; i < cartItem.length; i++) {
        var cartPrice = cartItem[i].getElementsByClassName('cart-price')[0].innerText,
            cartQuantity = cartItem[i].getElementsByClassName('cart-quantity')[0].value;

        total += (cartPrice * cartQuantity);
        cartTotalAmount.innerHTML = total;

    }
    if (cartItem.length == 0) {
        cartTotalAmount.innerHTML = 0;
    }
}

// TO REMOVE ITEM FROM CART
cartContainer.addEventListener('click', (e) => {
    if (e.target.classList[3] == 'remove') {
        e.target.parentElement.remove();
        var removedItem = e.target.parentElement.children[1].innerText;
    }
    cartTotal();

    // TO REMOVE REMOVED ITEM FROM ARRAY
    for (var i = 0; i < itemsArray.length; i++) {

        if (itemsArray[i].Name == removedItem) {
            itemsArray.splice(i, 1)
        }
    }
})

