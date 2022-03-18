// FORM SUBMIT
submit = document.getElementById('submit-button');
submit.addEventListener('click', validate);

// FORM VALIDATION
function validate() {

    // GET FORM INPUTS
    var name = document.getElementById('name').value,
        basicSalary = document.getElementById('basic-salary').value,
        hra = document.getElementById('hra').value,
        da = document.getElementById('da').value,
        pf = document.getElementById('pf'),
        esi = document.getElementById('esi'),
        pfMax = ((Number(basicSalary) + Number(da)) * 0.12), // TO CALCULATE PF VALUE
        esiMax = (Number(basicSalary) * 0.0075),             // TO CALCULATE ESI VALUE
        errorMessage = document.getElementById('error-message');

    // FORM VALIDATION CONDITIONS
    if (name == "" || name.match(/[1-9]/)) {
        errorMessage.innerHTML = 'Please Enter a Name'
    } else if (basicSalary == "") {
        errorMessage.innerHTML = 'Please Enter Basic Salary'
    } else if (hra == "") {
        errorMessage.innerHTML = 'Please Enter HRA'
    } else if (hra > (basicSalary / 2)) {
        errorMessage.innerHTML = 'HRA should be less than or equal to 50% of basic salary'
    } else if (da == "") {
        errorMessage.innerHTML = 'Please Enter DA'
    } else if (da > (basicSalary / 2)) {
        errorMessage.innerHTML = 'DA should be less than or equal to 50% of basic salary'
    } else {
        errorMessage.innerHTML = 'All Details Entered. View Your Salary'

        pf.value = Math.round(pfMax); // TO FILL PF VALUE
    esi.value = Math.round(esiMax); // TO FILL ESI VALUE

    // CREATING SALARY SLIP
    var row = 1;
    var table = document.getElementById('table');
    var rowInsert = table.insertRow(row);
    var cellOne = rowInsert.insertCell(0);
    var cellTwo = rowInsert.insertCell(1);
    var cellThree = rowInsert.insertCell(2);
    var cellFour = rowInsert.insertCell(3);
    var cellFive = rowInsert.insertCell(4);
    var cellSix = rowInsert.insertCell(5);
    var cellSeven = rowInsert.insertCell(6);
    var cellEight = rowInsert.insertCell(7);

    // GET CURRENT DATE
    var date = new Date().toLocaleDateString();

    // SALARY CALCULATION
    var salary = Number(basicSalary - ((Math.round(pfMax)) + (Math.round(esiMax)))) + Number(hra) + Number(da);

    // TABLE CELL DETAILS
    cellOne.innerHTML = name;
    cellTwo.innerHTML = basicSalary;
    cellThree.innerHTML = hra;
    cellFour.innerHTML = da;
    cellFive.innerHTML = Math.round(pfMax);
    cellSix.innerHTML = Math.round(esiMax);
    cellSeven.innerHTML = Math.round(salary);
    cellEight.innerHTML = date;

    row++;
    }   
}