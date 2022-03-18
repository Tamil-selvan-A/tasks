$(document).ready(function () {

    var nameError, emailError, mobileError, usernameError, passwordError, passwordCheckError, imageError;

    // PREVENT LETTERS FROM TYPING IN NUMBER INPUTS
    $('.number').on('keypress', function (e) {
        preventLetters(e);
    })

    function preventLetters(e) {
        var regex = new RegExp("[0-9]");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    }

    // VALIDATE FORM
    function validate() {

        // NAME VALIDATION
        if ($('#name').val().trim() == '') {
            $('#name-error').html('please fill name');
            $('#name').addClass('is-invalid');
            nameError = 1;
        }
        else {
            $('#name-error').html('');
            $('#name').removeClass('is-invalid');
            $('#name').addClass('is-valid');
            nameError = 0;
        }

        // EMAIL VALIDATION
        if ($('#email').val().trim() == '') {
            $('#email-error').html('please fill Email');
            $('#email').addClass('is-invalid');
            emailError = 1;
        }
        else if (!($('#email').val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
            $('#email-error').html('please enter valid Email');
            $('#email').addClass('is-invalid');
            emailError = 1;
        }
        else {
            $('#email-error').html('');
            $('#email').addClass('is-valid');
            $('#email').removeClass('is-invalid');
            emailError = 0;
        }

        // MOBILE VALIDATION
        if ($('#mobile').val().trim() == '') {
            $('#mobile-error').html('please fill Mobile');
            $('#mobile').addClass('is-invalid');
            mobileError = 1;
        }
        else {
            $('#mobile-error').html('');
            $('#mobile').addClass('is-valid');
            $('#mobile').removeClass('is-invalid');
            mobileError = 0;
        }

        // USERNAME VALIDATION
        if ($('#username').val().trim() == '') {
            $('#username-error').html('please fill Username');
            $('#username').addClass('is-invalid');
            usernameError = 1;

        }
        else {
            $('#username-error').html('');
            $('#username').addClass('is-valid');
            $('#username').removeClass('is-invalid');
            usernameError = 0;
        }

        // PASSWORD VALIDATION
        if ($('#password').val().trim() == '') {
            $('#password-error').html('please fill Password');
            $('#password').addClass('is-invalid');
            passwordError = 1;
        }
        else if (!($('#password').val().match(/[a-z]/) && $('#password').val().match(/[A-Z]/) && $('#password').val().match(/[^a-zA-Z\d]/))) {
            $('#password-error').html('Password Sholud Contain Minimum 1 Uppercase, 1 Lowercase and 1 Special Character');
            $('#password').addClass('is-invalid');
            passwordError = 1;
        }
        else {
            $('#password-error').html('');
            $('#password').addClass('is-valid');
            $('#password').removeClass('is-invalid');
            passwordError = 0;
        }

        // RETYPE PASSWORD VALIDATION
        if ($('#re-password').val().trim() == '') {
            $('#re-password-error').html('please fill Password');
            $('#re-password').addClass('is-invalid');
            passwordCheckError = 1;
        }
        else if (!($('#re-password').val().trim() == $('#password').val().trim())) {
            $('#re-password-error').html('please enter same Password');
            $('#re-password').addClass('is-invalid');
            passwordCheckError = 1;
        }
        else {
            $('#re-password-error').html('');
            $('#re-password').addClass('is-valid');
            $('#re-password').removeClass('is-invalid');
            passwordCheckError = 0;
        }

        // FILE VALIDATION 
        if ($('#image').val() == '') {
            $('#image-error').html('please upload image');
            $('#img-label').addClass('is-invalid');
            imageError = 1;
        }
        else {
            $('#image-error').html('');
            $('#img-label').addClass('is-valid');
            $('#img-label').removeClass('is-invalid');
            imageError = 0;
        }
    }

    // VALIDATE ON SUBMIT
    $('#form').on('submit', function (e) {

        validate();
        e.preventDefault();

        if (nameError == 1 || emailError == 1 || mobileError == 1 || usernameError == 1
            || passwordError == 1 || passwordCheckError == 1 || imageError == 1) {

            toastr.info("Please Fill all inputs with correct details");

        }
        else {

            var file_data = $('#image').prop('files')[0];

            // CHECK FILE FORMAT
            if ((file_data['type'] == 'image/jpeg') || (file_data['type'] == 'image/jpg') || (file_data['type'] == 'image/png')) {

                // CHECK FILE SIZE
                if (file_data['size'] > 5000000) {
                    toastr.info("File size sholud be less than 5MB");
                    return;
                }

                // UPLOAD TO SERVER
                var form_data = new FormData(this);
                form_data.append('file', file_data);

                $.ajax({
                    url: 'actions/upload.act.php', // point to server-side PHP script 
                    dataType: 'text',  // what to expect back from the PHP script, if anything
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'post',
                    success: function (php_script_response) {
                        toastr.info(php_script_response);
                    }
                });
            }
            else {
                toastr.info("Please upload Only jpeg, jpg and png formats");
            }

        }
    })

    // VALIDATE ON KEYUP
    $('input').on('keyup', function () {
        validate();
    })
    $('#image').on('change', function () {
        validate();
    })

    // TOASTER OPTIONS
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "preventDuplicates": true,
        "timeOut": "2000"
    }
})