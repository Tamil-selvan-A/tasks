
var form = document.getElementById('form');
form.addEventListener('submit', validate);

function validate(e) {

    // GET INPUTS
    var name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value,
        retypePassword = document.getElementById('retype-password').value,
        gender = document.getElementById('gender').value,
        tamil = document.getElementById('tamil'),
        english = document.getElementById('english'),
        telugu = document.getElementById('telugu'),
        html = document.getElementById('html'),
        css = document.getElementById('css'),
        js = document.getElementById('js'),
        dob = document.getElementById('dob').value,
        mobile = document.getElementById('mobile').value,
        message = document.getElementById('message').value;

    // GET ERROR MESSAGES
    var nameError = document.getElementById('name-error'),
        emailError = document.getElementById('email-error'),
        passwordError = document.getElementById('password-error'),
        retypePasswordError = document.getElementById('retype-password-error'),
        languageError = document.getElementById('language-error'),
        skilError = document.getElementById('skil-error'),
        dobError = document.getElementById('dob-error'),
        mobileError = document.getElementById('mobile-error'),
        messageError = document.getElementById('message-error');


    e.preventDefault(); //PREVENTS FORM SUBMITING
    // VALIDATE INPUTS

    var nameCheck, emailCheck, passwordCheck, retypePasswordCheck, genderCheck, languageCheck, skilCheck, dobCheck, mobileCheck, messageCheck;
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

    // PASSWORD VALIDATION
    if (password.length < 8) {
        passwordError.innerHTML = 'Password Sholud Contain Minimum 8 Characters';
    }
    else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[^a-zA-Z\d]/)) {
        passwordError.innerHTML = '';
        passwordCheck = true;
    }
    else {
        passwordError.innerHTML = 'Password Sholud Contain Minimum 1 Uppercase, 1 Lowercase and 1 Special Character';
    }

    // PASSWORD RETYPE VALIDATION
    if (retypePassword == '') {
        retypePasswordError.innerHTML = 'Password Can Not Be Blank';
    }
    else if (retypePassword != password) {
        retypePasswordError.innerHTML = 'Please Enter the Same Password';
    }
    else {
        retypePasswordError.innerHTML = '';
        retypePasswordCheck = true;
    }

    // LANGUAGE VALIDATION
    if (tamil.checked == false && english.checked == false && telugu.checked == false) {
        languageError.innerHTML = 'Please Select Any one Language'
    }
    else {
        languageError.innerHTML = '';
        languageCheck = true
    }

    // SKILS VALIDATION
    if (html.checked == false && css.checked == false && js.checked == false) {
        skilError.innerHTML = 'Please Select Any one Skill'
    }
    else {
        skilError.innerHTML = '';
        skilCheck = true;
    }

    // DOB VALIDATION
    if (dob == '') {
        dobError.innerHTML = 'Please Enter Date of Birth'
    }
    else {
        dobError.innerHTML = '';
        dobCheck = true;
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

    // GET TAMIL ENGLISH TELUGU HTML CSS JS VALUES
    if (tamil.checked == true) {
        var tamilChecked = tamil.value;
    }
    else {
        tamilChecked = '';
    }

    if (english.checked == true) {
        var englishChecked = english.value;
    }
    else {
        englishChecked = '';
    }

    if (telugu.checked == true) {
        var teluguChecked = telugu.value;
    }
    else {
        teluguChecked = '';
    }

    if (html.checked == true) {
        var htmlChecked = html.value;
    }
    else {
        htmlChecked = '';
    }

    if (css.checked == true) {
        var cssChecked = css.value;
    }
    else {
        cssChecked = '';
    }

    if (js.checked == true) {
        var jsChecked = js.value;
    }
    else {
        jsChecked = '';
    }

    //CHECK ALL INPUT FIELDS ARA VALIDATED THEN CREATE TABLE
    if (nameCheck == true && emailCheck == true && passwordCheck == true &&
        retypePasswordCheck == true && languageCheck == true &&
        skilCheck == true && dobCheck == true && mobileCheck == true && messageCheck == true) {

        document.getElementById('tbody').innerHTML += 
        
        '<tr><td>' + ' ' + name + '</td>' +
        '<td>' + ' ' + email + '</td> ' +
        '<td>' + ' ' + password + '</td> ' +
        '<td>' + ' ' + gender + '</td> ' +
        '<td>' + ' ' + tamilChecked + ' ' + englishChecked + ' ' + teluguChecked + '</td> ' +
        '<td>' + ' ' + htmlChecked + ' ' + cssChecked + ' ' + jsChecked + '</td> ' +
        '<td>' + ' ' + dob + '</td><td>' + ' ' + mobile + '</td> ' +
        '<td>' + ' ' + message + '</td></tr>';
    }
}