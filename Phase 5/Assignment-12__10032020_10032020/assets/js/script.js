$(document).ready(function () {

    var nameError, salaryError, hraError, daError;

    // TO PREVENT ENTERING ALPHA
    $('.number').keypress(function (e) {
        preventLetters (e);
    });

    function preventLetters (e) {
        var regex = new RegExp("[0-9]");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    }

    // TO VALIDATE FORM
    function validate() {

        // NAME VALIDATION
        if ($('#name').val() == '') {
            $('.name-error').html('Please enter name');
        }
        else {
            $('.name-error').html('');
            nameError = 0;
        }

        // SALARY VALIDATION
        if ($('#salary').val() == '') {
            $('.salary-error').html('Please enter salary');
        }
        else {
            $('.salary-error').html('');
            salaryError = 0;
        }

        // HRA VALIDATION
        if ($('#hra').val() == '') {
            $('.hra-error').html('Please enter hra');
        }
        else if ($('#hra').val() > (($('#salary').val()) / 2)) {
            $('.hra-error').html('HRA should be less than or euqal to 50% of basic salary');
        }
        else {
            $('.hra-error').html('');
            hraError = 0;
        }
        
        // DA VALIDATION
        if ($('#da').val() == '') {
            $('.da-error').html('Please enter da');
        }
        else if ($('#da').val() > (($('#salary').val()) / 2)) {
            $('.da-error').html('DA should be less than or euqal to 50% of basic salary');
        }
        else {
            $('.da-error').html('');
            daError = 0;
        }
    }

    // VALIDATE WHILE KEYPRESS
    $('input').keyup(function () {
        validate();
    })

    // VALIDATE WHILE SUBMIT
    $('.submit').click(function (e) {
        validate();
        if (!(nameError == 0 && salaryError == 0 && hraError == 0 && daError == 0)) {
            e.preventDefault();
        }
    })
})