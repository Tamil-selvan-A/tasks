// GET ALL ORDER NOW BUTTONS AND LOOP
var orderNow = document.getElementsByClassName('order-now'),
    removeItem = document.getElementsByClassName('remove'),
    cartContainer = document.getElementById('cart-container');


var cartArray = [];

// GET ALL ORDER NOW BUTTON AND LOOP 
for (var i = 0; i < orderNow.length; i++) {

    orderNow[i].addEventListener('click', (e) => {

        e.preventDefault(); //PREVENTS MOVING TOP

        var name = e.target.offsetParent.children[1].children[0].innerText,
            image = e.target.offsetParent.children[0].src,
            price = e.target.offsetParent.children[3].children[0].children[0].children[0].innerText;

        // CART ITEM HTML 
        var cartItem = '<tr class="border-bottom cart-items">' +
            '<td><img src="' + image + '" alt="dosa"></td>' +
            '<td>' + name + '</td>' +
            '<td>' + price + '</td>' +
            '<td><input type="number" value="1" min="1" class="w-50 text-center"></td>' +
            '<td><i class="fas fa-trash-alt remove"></i></td>' +
            '</tr>';

        var cartObject = {
            Name: name
        }

        for (var item of cartArray) {
            if (name == item.Name) {
                alert('This food already added to your cart');
                return;
            }
        }

        cartContainer.innerHTML += cartItem;
        cartArray.push(cartObject);
        findTotal();
    })
}

// REMOVE ITEM FROM CART
cartContainer.addEventListener('click', (e) => {
    if (e.target.classList[2] == 'remove') {
        e.target.offsetParent.parentElement.remove();
        var removedItem = e.target.parentElement.parentElement.children[1].innerText;
    }
    
    findTotal();

    // TO REMOVE ITEM FROM ARRAY
    for (var i = 0; i < cartArray.length; i++) {

        if (cartArray[i].Name == removedItem) {
            cartArray.splice(i, 1)
        }
    }
})

// CALCULATE TOTAL AMOUNT
function findTotal() {

    var total = 0;
    var cartItems = cartContainer.getElementsByClassName('cart-items'),
        totalAmount = document.getElementById('total-amount');

    for (var i = 0; i < cartItems.length; i++) {

        var cartPrice = cartItems[i].children[2].innerText,
            cartQuantity = cartItems[i].children[3].children[0].value;

        total += (cartPrice * cartQuantity);
        totalAmount.innerHTML = total;

    }
    if (cartItems.length == 0) {
        totalAmount.innerHTML = 0;
    }

    document.getElementById('cart-item-count').innerHTML = cartItems.length;
}