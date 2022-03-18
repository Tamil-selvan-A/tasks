// FIND LARGER VALUE
var numberOne = document.getElementById('number-one');
var numberTwo = document.getElementById('number-two');
var largerButton = document.getElementById('larger-button');
var largerOutput = document.getElementById('larger-output');

// FIND VALUE FUNCTION
largerButton.addEventListener('click', larger);
function larger() {
    if (numberOne.value < numberTwo.value) {
        largerOutput.innerHTML = numberTwo.value;
    }
    else if (numberTwo.value < numberOne.value) {
        largerOutput.innerHTML = numberOne.value;
    }
    else if (numberOne.value.length == 0 && numberTwo.value.length == 0) {
        largerOutput.innerHTML = 'Please Enter a Value';
    }
    else if (numberOne.value == numberTwo.value) {
        largerOutput.innerHTML = 'Please Enter Different Values';
    }
};

// SORT GIVEN THREE NUMBERS
var sortNumberOne = document.getElementById('sort-number-one');
var sortNumberTwo = document.getElementById('sort-number-two');
var sortNumberThree = document.getElementById('sort-number-three');
var sortButton = document.getElementById('sort-button');
var sortOutput = document.getElementById('sort-output');

// SORT GIVEN THREE NUMBERS FUNCTION
sortButton.addEventListener('click', sort);
function sort() {
    if (sortNumberOne.value <= sortNumberTwo.value && sortNumberTwo.value <= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberOne.value + sortNumberTwo.value + sortNumberThree.value;
    }
    else if (sortNumberOne.value >= sortNumberTwo.value && sortNumberTwo.value >= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberThree.value + sortNumberTwo.value + sortNumberOne.value;
    }
    else if (sortNumberThree.value >= sortNumberTwo.value && sortNumberThree.value >= sortNumberOne.value && sortNumberOne.value <= sortNumberTwo.value) {
        sortOutput.innerHTML = sortNumberThree.value + sortNumberTwo.value + sortNumberOne.value;
    }
    else if (sortNumberOne.value <= sortNumberTwo.value && sortNumberTwo.value >= sortNumberThree.value && sortNumberOne.value <= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberOne.value + sortNumberThree.value + sortNumberTwo.value;
    }
    else if (sortNumberOne.value >= sortNumberTwo.value && sortNumberTwo.value <= sortNumberThree.value && sortNumberOne.value <= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberTwo.value + sortNumberOne.value + sortNumberThree.value;
    }
    else if (sortNumberThree.value >= sortNumberTwo.value && sortNumberThree.value >= sortNumberOne.value && sortNumberOne.value >= sortNumberTwo.value) {
        sortOutput.innerHTML = sortNumberThree.value + sortNumberOne.value + sortNumberTwo.value;
    }
    else if (sortNumberThree.value <= sortNumberTwo.value && sortNumberTwo.value <= sortNumberOne.value) {
        sortNumberThree.value + sortNumberTwo.value + sortNumberOne.value;
    }
    else if (sortNumberOne.value <= sortNumberThree.value && sortNumberTwo.value <= sortNumberOne.value) {
        sortOutput.innerHTML = sortNumberTwo.value + sortNumberOne.value + sortNumberThree.value;
    }
    else if (sortNumberOne.value >= sortNumberThree.value && sortNumberTwo.value <= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberTwo.value + sortNumberThree.value + sortNumberOne.value;
    }
    else if (sortNumberOne.value >= sortNumberTwo.value && sortNumberTwo.value <= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberTwo.value + sortNumberOne.value + sortNumberThree.value;
    }
    else if (sortNumberOne.value <= sortNumberTwo.value && sortNumberTwo.value >= sortNumberThree.value) {
        sortOutput.innerHTML = sortNumberThree.value + sortNumberOne.value + sortNumberTwo.value;
    }
}

// LARGEST OF FIVE NUMBERS
var largeNumberOne = document.getElementById('large-number-one');
var largeNumberTwo = document.getElementById('large-number-two');
var largeNumberThree = document.getElementById('large-number-three');
var largeNumberFour = document.getElementById('large-number-four');
var largeNumberFive = document.getElementById('large-number-five');
var largeButton = document.getElementById('large-button');
var largeOutput = document.getElementById('large-output');
var maxNumber;

// LARGEST OF FIVE NUMBERS FUNCTION
largeButton.addEventListener('click', large);
function large() {
    if (maxNumber <= largeNumberOne.value) {
        maxNumber = largeNumberOne.value
    }
    else {
        maxNumber = 0
    }
    if (maxNumber <= largeNumberTwo.value) {
        maxNumber = largeNumberTwo.value
    }
    else {
        maxNumber = maxNumber
    }
    if (maxNumber <= largeNumberThree.value) {
        maxNumber = largeNumberThree.value
    }
    else {
        maxNumber = maxNumber
    }
    if (maxNumber <= largeNumberFour.value) {
        maxNumber = largeNumberFour.value
    }
    else {
        maxNumber = maxNumber
    }
    if (maxNumber <= largeNumberFive.value) {
        maxNumber = largeNumberFive.value
    }
    else {
        maxNumber = maxNumber
    }
    largeOutput.innerHTML = maxNumber;
};

//FIND ODD OR EVEN
var oddEvenOutput = document.getElementById('odd-even-output')
var oddEven;
for (oddEven = 0; oddEven <= 15; oddEven++) {
    if (oddEven % 2 == 0) {
        oddEvenOutput.innerHTML += oddEven + ' ' + 'EVEN NUMBER, ' + '<br>'
    }
    else {
        oddEvenOutput.innerHTML += oddEven + ' ' + 'ODD NUMBER, ' + '<br>'
    }
}

// STUDENTS MARK LIST
var davidT = document.getElementById('david-t'),
    davidE = document.getElementById('david-e'),
    davidM = document.getElementById('david-m'),
    davidS = document.getElementById('david-s'),
    davidSS = document.getElementById('david-ss'),
    davidAverage = document.getElementById('david-average'),
    davidGrade = document.getElementById('david-grade');

var vinothT = document.getElementById('vinoth-t'),
    vinothE = document.getElementById('vinoth-e'),
    vinothM = document.getElementById('vinoth-m'),
    vinothS = document.getElementById('vinoth-s'),
    vinothSS = document.getElementById('vinoth-ss'),
    vinothAverage = document.getElementById('vinoth-average'),
    vinothGrade = document.getElementById('vinoth-grade');

var divyaT = document.getElementById('divya-t'),
    divyaE = document.getElementById('divya-e'),
    divyaM = document.getElementById('divya-m'),
    divyaS = document.getElementById('divya-s'),
    divyaSS = document.getElementById('divya-ss'),
    divyaAverage = document.getElementById('divya-average'),
    divyaGrade = document.getElementById('divya-grade');

var ishithaT = document.getElementById('ishitha-t'),
    ishithaE = document.getElementById('ishitha-e'),
    ishithaM = document.getElementById('ishitha-m'),
    ishithaS = document.getElementById('ishitha-s'),
    ishithaSS = document.getElementById('ishitha-ss'),
    ishithaAverage = document.getElementById('ishitha-average'),
    ishithaGrade = document.getElementById('ishitha-grade');

var thomasT = document.getElementById('thomas-t'),
    thomasE = document.getElementById('thomas-e'),
    thomasM = document.getElementById('thomas-m'),
    thomasS = document.getElementById('thomas-s'),
    thomasSS = document.getElementById('thomas-ss'),
    thomasAverage = document.getElementById('thomas-average'),
    thomasGrade = document.getElementById('thomas-grade');

// AVERAGE CALCULATION
davidAverage.innerHTML = (parseInt(davidT.innerText) + parseInt(davidE.innerText) + parseInt(davidM.innerText) + parseInt(davidS.innerText) + parseInt(davidSS.innerText)) / 5;

vinothAverage.innerHTML = (parseInt(vinothT.innerText) + parseInt(vinothE.innerText) + parseInt(vinothM.innerText) + parseInt(vinothS.innerText) + parseInt(vinothSS.innerText)) / 5;

divyaAverage.innerHTML = (parseInt(divyaT.innerText) + parseInt(divyaE.innerText) + parseInt(divyaM.innerText) + parseInt(divyaS.innerText) + parseInt(divyaSS.innerText)) / 5;

ishithaAverage.innerHTML = (parseInt(ishithaT.innerText) + parseInt(ishithaE.innerText) + parseInt(ishithaM.innerText) + parseInt(ishithaS.innerText) + parseInt(ishithaSS.innerText)) / 5;

thomasAverage.innerHTML = (parseInt(thomasT.innerText) + parseInt(thomasE.innerText) + parseInt(thomasM.innerText) + parseInt(thomasS.innerText) + parseInt(thomasSS.innerText)) / 5;

// var average = [davidAverage.innerText, vinothAverage.innerText, divyaAverage.innerText, ishithaAverage.innerText, thomasAverage.innerText]
// var grade = [davidGrade.innerText, vinothGrade.innerText, divyaGrade.innerText, ishithaGrade.innerText, thomasGrade.innerText]
// for (average[0]; average < 5; average++) {
//     if (average < 80) {
//         // grade[average.length] = 'F'
//         console.log('hi')
//     }
//     //     else {
//     //         grade[average.length] = F
//     //     }
// }

// DAVID GRADE
if (parseInt(davidAverage.innerText) < 60) {
    davidGrade.innerText = 'F'
}
else if (parseInt(davidAverage.innerText) < 70) {
    davidGrade.innerText = 'D'
}
else if (parseInt(davidAverage.innerText) < 80) {
    davidGrade.innerText = 'C'
}
else if (parseInt(davidAverage.innerText) < 90) {
    davidGrade.innerText = 'B'
}
else if (parseInt(davidAverage.innerText) < 100) {
    davidGrade.innerText = 'A'
}

// VINOTH GRADE
if (parseInt(vinothAverage.innerText) < 60) {
    vinothGrade.innerText = 'F'
}
else if (parseInt(vinothAverage.innerText) < 70) {
    vinothGrade.innerText = 'D'
}
else if (parseInt(vinothAverage.innerText) < 80) {
    vinothGrade.innerText = 'C'
}
else if (parseInt(vinothAverage.innerText) < 90) {
    vinothGrade.innerText = 'B'
}
else if (parseInt(vinothAverage.innerText) < 100) {
    vinothGrade.innerText = 'A'
}

// DIVYA GRADE
if (parseInt(divyaAverage.innerText) < 60) {
    divyaGrade.innerText = 'F'
}
else if (parseInt(divyaAverage.innerText) < 70) {
    divyaGrade.innerText = 'D'
}
else if (parseInt(divyaAverage.innerText) < 80) {
    divyaGrade.innerText = 'C'
}
else if (parseInt(divyaAverage.innerText) < 90) {
    divyaGrade.innerText = 'B'
}
else if (parseInt(divyaAverage.innerText) < 100) {
    divyaGrade.innerText = 'A'
}

// ISHITHA GRADE
if (parseInt(ishithaAverage.innerText) < 60) {
    ishithaGrade.innerText = 'F'
}
else if (parseInt(ishithaAverage.innerText) < 70) {
    ishithaGrade.innerText = 'D'
}
else if (parseInt(ishithaAverage.innerText) < 80) {
    ishithaGrade.innerText = 'C'
}
else if (parseInt(ishithaAverage.innerText) < 90) {
    ishithaGrade.innerText = 'B'
}
else if (parseInt(ishithaAverage.innerText) < 100) {
    ishithaGrade.innerText = 'A'
}

// THOMAS GRADE
if (parseInt(thomasAverage.innerText) < 60) {
    thomasGrade.innerText = 'F'
}
else if (parseInt(thomasAverage.innerText) < 70) {
    thomasGrade.innerText = 'D'
}
else if (parseInt(thomasAverage.innerText) < 80) {
    thomasGrade.innerText = 'C'
}
else if (parseInt(thomasAverage.innerText) < 90) {
    thomasGrade.innerText = 'B'
}
else if (parseInt(thomasAverage.innerText) < 100) {
    thomasGrade.innerText = 'A'
}

// PRINT TRIANGLE 
var triangleOutput = document.getElementById('triangle-output');
var triangle;
var shapeTriangle;
for (triangle = 0; triangle < 5; triangle++) {
    for (shapeTriangle =1; shapeTriangle<=triangle; shapeTriangle++) {
        triangleOutput.innerHTML += "*";
    }
    triangleOutput.innerHTML += "*" + "<br>";
}

// SUM MULTIPLES OF 3 AND 5
var sumOutput = document.getElementById('sum-output');
var number;
var sum = 0;

for (number = 0; number < 1000; number++) {
    if (number % 3 == 0 || number % 5 == 0) {
        sum += number;
        sumOutput.innerHTML = sum;
    }
}

// FIND RAINBOW COLOURS
var rainbowInput = document.getElementById('rainbow-input');
var rainbowButton = document.getElementById('rainbow-button');
var rainbowOutput = document.getElementById('rainbow-output');

rainbowButton.addEventListener('click', rainbow);
function rainbow() {
    if (rainbowInput.value == "violet") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "indigo") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "blue") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "green") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "yellow") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "orange") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else if (rainbowInput.value == "red") {
        rainbowOutput.innerHTML = "You entered a rainbow colour"
    }
    else {
        rainbowOutput.innerHTML = "This is not a rainbow colour"
    }
}

// PRINT EVEN NUMBER
var printEvenInput = document.getElementById('print-even-input');
var printEvenButton = document.getElementById('print-even-button');
var printEvenOutput = document.getElementById('print-even-output');
var evenNumber;

printEvenButton.addEventListener('click', printEven);
function printEven() {
    for (evenNumber = 0; evenNumber < printEvenInput.value; evenNumber++) {
        if (evenNumber % 2 == 0) {
            printEvenOutput.innerHTML += evenNumber + " ";
        }
    }
}

// FACTORIAL NUMBER
var factorialButton = document.getElementById('factorial-button');
var factorialOutput = document.getElementById('factorial-output');

factorialButton.addEventListener('click', factorialFunction);

function factorialFunction() {
    var factorialInput = document.getElementById('factorial-input').value;
    var factorial = 1;
    var number;
    for (number = factorialInput; number >= 1; number--)
        factorial = factorial * number;
    console.log(factorial);
    factorialOutput.innerHTML = factorial;
}