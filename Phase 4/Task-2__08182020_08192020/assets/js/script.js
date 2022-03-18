// GET THE WEBSITE URL
var url = document.URL;
document.getElementById('url').innerHTML = url;

// MODULUS OF A NUMBER
var modulusNumber = document.getElementById('modulus');
var divider = document.getElementById('divider');
var modulusButton = document.getElementById('modulus-btn');
var modulusOutput = document.getElementById('modulus-output');
// MODULUS FUNCTION
modulusButton.addEventListener('click', modulus);
function modulus() {
    modulusOutput.innerHTML = parseInt(modulusNumber.value) % parseInt(divider.value);
};
 
// PRINT EVEN NUMBERS FROM 2 TO 100
var evenOutput = document.getElementById('even-output');
var even;
for ( even = 1; even < 51; even++) {
    evenOutput.innerHTML += even * 2;
};

// PRINT ODD NUMBERS FROM 2 TO 100
var oddOutput = document.getElementById('odd-output');
var odd;
for ( odd = 0; odd < 50; odd++) {
    oddOutput.innerHTML += (2 * odd) + 1;
};

// MULTIPLES OF FIVE
var fiveOutput = document.getElementById('five-output');
var five;
for ( five = 0; five < 20; five++) {
    fiveOutput.innerHTML += five * 5;
};