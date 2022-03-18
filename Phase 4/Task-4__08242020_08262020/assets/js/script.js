// ASCENDING AND DESCENDING
var fiveNumbers = [4, 9, 5, 7, 1];

function ascending(numbers) {

    var sortedArray = []

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        sortedArray.push(numbers[i])
    }
    return sortedArray;
}

function descending(numbers) {

    var sortedArray = []

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        sortedArray.push(numbers[i])
    }
    return sortedArray;
}

document.getElementById('ascending').innerHTML = 'Ascending order : <br>' + ascending(fiveNumbers);
document.getElementById('descending').innerHTML = 'Descending order : <br>' + descending(fiveNumbers);

// ARRAY FOR STORE FORM DATA
var formDataArray = [];


// LAST ITEM OF AN ARRAY
var englishLetters = ['A', 'B', 'C', 'D'];
var lastItem = englishLetters.length;
document.getElementById('last-item').innerHTML = 'Last item of the abobe array is' + ' ' + englishLetters[lastItem - 1];

// INSERT NUMBER 
var fruits = ['apple', 'orange', 'mango', 'banana'];
fruits.splice(2, 0, '5');
document.getElementById('insert-output').innerHTML = 'Number inserted Array <br>' + fruits;

// REMOVE LAST ELEMENT
var mobiles = ['samsung', 'nokia', 'redmi', 'realme'];
mobiles.pop();
document.getElementById('remove-last-output').innerHTML = 'Last item removed array <br>' + mobiles;

// FORM VALIDATION
var submit = document.getElementById('submit');

submit.addEventListener('click', validate);

function validate() {

    var name = document.getElementById('name').value;
    var nameError = document.getElementById('name-error');
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var ageError = document.getElementById('age-error');
    var registerDate = document.getElementById('register-date').value;
    var registerDateError = document.getElementById('register-date-error');

    if (name == '') {
        nameError.innerHTML = 'Name can not be blank';
    } else if (name.match(/[1-9]/)) {
        nameError.innerHTML = 'Name can not contain numbers';
    } else {
        nameError.innerHTML = '';
    }
    if (email == '') {
        emailError.innerHTML = 'Email can not be blank';
    } else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = '';
    } else {
        emailError.innerHTML = 'Please Enter a Valid Email';
    }
    if (age == '') {
        ageError.innerHTML = 'Age can not be blank';
    } else if (age <= 10) {
        ageError.innerHTML = 'Age sholud be greater than ten';
    } else if (age >= 120) {
        ageError.innerHTML = 'Age sholud be smaller than 120';
    }
    else {
        ageError.innerHTML = '';
    }
    if (registerDate == '') {
        registerDateError.innerHTML = 'Date can not be blank';
    } else {
        registerDateError.innerHTML = '';

        // STORE FORM DATA AS OBJECT
        var formDataObject = {
            Name: name,
            Email: email,
            Age: age,
            Gender: gender,
            Register_Date: registerDate
        };

        // ADD OBJECTS TO ARRAY
        formDataArray.push(formDataObject)
        console.log(formDataArray);

        // DISPLAY FORM DATA IN CARD
        document.getElementById('cards-container').innerHTML += '<div class="card"><div class="card-body"><p class="card-text">Name:' + ' ' + name + '</p>' + '<p class="card-text">Email:' + ' ' + email + '</p> <p class="card-text">Age:' + ' ' + age + '</p><p class="card-text">Gender:' + ' ' + gender + '</p> <p class="card-text">Register Date:' + ' ' + registerDate + '</p></div></div>';
    }
}