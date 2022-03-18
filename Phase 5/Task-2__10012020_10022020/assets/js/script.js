$(document).ready(function () {

    var nameError, emailError, mobileError, doorError, streetError, villageError, districtError, pinError;

    // PREVENT LETTERS
    $('.number').keypress(function (e) {
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

    // FORM VALIDATION
    function validate() {
        // NAME VALIDATION
        if ($('#address-name').val() == '') {
            $('.address-name-error').html('Please fill out name');
        }
        else if (($('#address-name').val()).match(/[0-9]/)) {
            $('.address-name-error').html('Name can not contain Numbers');
        } else {
            $('.address-name-error').html('');
            nameError = 0;
        }

        // EMAIL VALIDATION
        if ($('#address-email').val() == '') {
            $('.address-email-error').html('Please fill out Email');
        }
        else if (($('#address-email').val()).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            $('.address-email-error').html('');
            emailError = 0;
        } else {
            $('.address-email-error').html('Please enter valid email');
        }

        // MOBILE VALIDATION
        if ($('#address-mobile').val() == '') {
            $('.address-mobile-error').html('Please fill out Mobile');
        }
        else {
            $('.address-mobile-error').html('');
            mobileError = 0;
        }

        // DOOR NO VALIDATION
        if ($('#door-number').val() == '') {
            $('.door-number-error').html('Please fill out Door No');
        }
        else {
            $('.door-number-error').html('');
            doorError = 0;
        }

        // STREET NAME VALIDATION
        if ($('#street').val() == '') {
            $('.street-error').html('Please fill out street name');
        }
        else {
            $('.street-error').html('');
            streetError = 0;
        }

        // VILLAGE NAME VALIDATION
        if ($('#village').val() == '') {
            $('.village-error').html('Please fill out village name');
        }
        else {
            $('.village-error').html('');
            villageError = 0;
        }

        // DISTRICT NAME VALIDATION
        if ($('#district').val() == '') {
            $('.district-error').html('Please fill out district name');
        }
        else {
            $('.district-error').html('');
            districtError = 0;
        }

        // PINCODE VALIDATION
        if ($('#pin').val() == '') {
            $('.pin-error').html('Please fill out pin code');
        }
        else {
            $('.pin-error').html('');
            pinError = 0;
        }
    }

    $('input').keyup(function (e) {
        validate();
    })
    $('.submit').click(function (e) {
        validate();
        if (!((nameError == 0) && (emailError == 0) && (mobileError == 0) && (doorError == 0) &&
            (streetError == 0) && (villageError == 0) && (districtError == 0) && (pinError == 0))) {
            e.preventDefault();
            toastr["info"]("Please fill all details without any mistake", "MESSAGE")
        }
        else {
            toastr["info"]("Form submitted successfully !", "MESSAGE")
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }
    })
})