// GET SUBMIT BUTTON
let submit = document.getElementById('submit');

// ARRAY TO STORE USER DETAILS
let userDetailsAll = [];

// FUNCTION TO GET DATA
submit.addEventListener('click', () => {

    // GET INPUTS AND ERROR MESSAGES
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        mobile = document.getElementById('mobile').value,
        message = document.getElementById('message').value,
        nameError = document.getElementById('name-error'),
        emailError = document.getElementById('email-error'),
        mobileError = document.getElementById('mobile-error'),
        messageError = document.getElementById('message-error');

    var nameCheck, emailCheck, mobileCheck, messageCheck;

    // NAME VALIDATION
    if (name == '') {
        nameError.innerHTML = 'Name Can Not Be Blank';
    }
    else if (name.match(/[1-9]/)) {
        nameError.innerHTML = 'Name Can Not Contain Letters';
    }
    else {
        nameError.innerHTML = '';
        nameCheck = true
    }

    // EMAIL VALIDATION
    if (email == '') {
        emailError.innerHTML = 'Email Can Not Be Blank';
    }
    else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = '';
        emailCheck = true;
    }
    else {
        emailError.innerHTML = 'Please Enter a Valid Email';
    }

    // MOBILE NUMBER VALIDATION
    if (mobile == '') {
        mobileError.innerHTML = 'Please Enter Mobile Number'
    }
    else if (mobile.match(/[a-zA-Z]/)) {
        mobileError.innerHTML = 'Mobile Number Can Not Contain Letters'
    }
    else {
        mobileError.innerHTML = '';
        mobileCheck = true;
    }

    // MESSAGE VALIDATION
    if (message == '') {
        messageError.innerHTML = 'Please Enter Your Message'
    }
    else if (message.length > 1000) {
        messageError.innerHTML = 'Message Can Not Contain More Than 1000 Characters'
    }
    else {
        messageError.innerHTML = ''
        messageCheck = true;
    }

    // CHECK ALL INPUTS ARE VALIDATED
    if (nameCheck == true && emailCheck == true && mobileCheck == true && messageCheck == true) {

        // CREATE FORM DATA OBJECT
        let userDetails = {
            Name: name,
            Email: email,
            Mobile: mobile,
            Message: message
        }

        userDetailsAll.push(userDetails);
        localStorage.setItem('userDetailsAllName', JSON.stringify(userDetailsAll)); //SAVE ARRAY TO LOCAL STORAGE

        // var data = JSON.stringify(userDetailsAll);
        // document.cookie = 'userDetailsAllName =' + data;
    }
})