// GET LINKS
const allLink = document.getElementById('all-link'),
    cakesLink = document.getElementById('cakes-link'),
    cupCakesLink = document.getElementById('cup-cakes-link'),
    sweetsLink = document.getElementById('sweets-link'),
    iceCreamsLink = document.getElementById('ice-creams-link'),
    searchBox = document.getElementById('search-box');

// GET ITEMS
const cakeOne = document.getElementById('cake-one'),
    cakeTwo = document.getElementById('cake-two'),
    cakeThree = document.getElementById('cake-three'),
    cupCakeOne = document.getElementById('cup-cake-one'),
    cupCakeTwo = document.getElementById('cup-cake-two'),
    cupCakeThree = document.getElementById('cup-cake-three'),
    sweetOne = document.getElementById('sweet-one'),
    sweetTwo = document.getElementById('sweet-two'),
    sweetThree = document.getElementById('sweet-three'),
    iceCreamOne = document.getElementById('ice-cream-one'),
    iceCreamTwo = document.getElementById('ice-cream-two'),
    iceCreamThree = document.getElementById('ice-cream-three');

// SHOP ITEMS ARRAY
const items = [cakeOne, cakeTwo, cakeThree, cupCakeOne, cupCakeTwo, cupCakeThree,
    sweetOne, sweetTwo, sweetThree, iceCreamOne, iceCreamTwo, iceCreamThree];

// SEARCH BOX
searchBox.addEventListener('keyup', filterCards);
function filterCards() {
    var searchInput = searchBox.value.toString().toLowerCase();

    if (searchInput == ('cake')) {
        filterCakes();
    }

    if (searchInput == 'cup') {
        filterCupCakes();
    }

    if (searchInput == 'sweet') {
        filterSweets();
    }

    if (searchInput == 'ice') {
        filterIceCreams();
    }

    if (searchInput == '') {
        filterAll();
    }
}

// ALL FILTER
allLink.addEventListener('click', filterAll);

function filterAll() {
    var showAll = items;
    var all;

    for (all of showAll) {
        all.classList.add('add-card');
        all.classList.remove('remove-card');
    }
}

// CAKE FILTER
cakesLink.addEventListener('click', filterCakes);

function filterCakes() {
    var showCakes = items.slice(0, 3);
    var removeOthers = items.slice(3, 12)
    var cakeItem, otherItems;

    for (cakeItem of showCakes) {
        cakeItem.classList.add('add-card');
        cakeItem.classList.remove('remove-card');
    }
    for (otherItems of removeOthers) {
        otherItems.classList.add('remove-card');
        otherItems.classList.remove('add-card');
    }
}

//CUP CAKE FILTER
cupCakesLink.addEventListener('click', filterCupCakes);

function filterCupCakes() {
    var missedCupCakes = items.slice(0, 3)
    var showCupCakes = items.slice(3, 6);
    var removeCupOthers = items.slice(6, 12);
    var cupCakeakeItem, otherCupItems, missedCupCakesItem;

    for (cupCakeakeItem of showCupCakes) {
        cupCakeakeItem.classList.add('add-card');
        cupCakeakeItem.classList.remove('remove-card');
    }
    for (otherCupItems of removeCupOthers) {
        otherCupItems.classList.add('remove-card');
        otherCupItems.classList.remove('add-card');
    }
    for (missedCupCakesItem of missedCupCakes) {
        missedCupCakesItem.classList.add('remove-card');
        missedCupCakesItem.classList.remove('add-card');
    }
}

//SWEETS FILTER
sweetsLink.addEventListener('click', filterSweets);

function filterSweets() {
    var missedSweets = items.slice(0, 6)
    var showSweets = items.slice(6, 9);
    var removeSweetOthers = items.slice(9, 12)
    var sweetsItem, otherSweetItems, missedSweetItem;

    for (sweetsItem of showSweets) {
        sweetsItem.classList.add('add-card');
        sweetsItem.classList.remove('remove-card');
    }
    for (otherSweetItems of removeSweetOthers) {
        otherSweetItems.classList.add('remove-card');
        otherSweetItems.classList.remove('add-card');
    }
    for (missedSweetItem of missedSweets) {
        missedSweetItem.classList.add('remove-card');
        missedSweetItem.classList.remove('add-card');
    }
}

//ICE CREAMS FILTER
iceCreamsLink.addEventListener('click', filterIceCreams);

function filterIceCreams() {
    var showIceCreams = items.slice(9, 12);
    var removeIceCreamsOthers = items.slice(0, 9)
    var iceCreamsItem, otherIceCreamstems;

    for (iceCreamsItem of showIceCreams) {
        iceCreamsItem.classList.add('add-card');
        iceCreamsItem.classList.remove('remove-card');
    }
    for (otherIceCreamstems of removeIceCreamsOthers) {
        otherIceCreamstems.classList.add('remove-card');
        otherIceCreamstems.classList.remove('add-card');
    }
}