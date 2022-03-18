$(document).ready(function () {

    var unameError, passwordError;
    var form = $('#form');

    $('input').keyup(function () {
        validate();
    })
    // $('input[type = submit]').click(function (e) {
    //     e.preventDefault();
    //     validate();
    // })

    function validate() {

        // VALIDATE USERNAME
        if ($('input[type = text]').val() == '') {
            $('.uname-error').html('Please fill Username');
            unameError = 1;
        }
        else {
            $('.uname-error').html('');
            unameError = 0;
        }

        // VALIDATE PASSWORD
        if ($('input[type = password]').val() == '') {
            $('.password-error').html('Please fill Password');
            passwordError = 1;
        }
        else {
            $('.password-error').html('');
            passwordError = 0;
        }
    }

    $('#form').on('submit', function (e) {
        e.preventDefault();
        validate();
        if (unameError == 0 && passwordError == 0) {
            verifyUser();
        }
    })

    function verifyUser() {
        var formData = form.serialize();
        $.ajax({
            url: 'actions/login.act.php',
            type: 'POST',
            data: 'action=login&' + formData,
            dataType: 'JSON'

        }).done(function (response) {
            if (response['status'] == 'Success') {
                toastr.info(response['message']);
                $(location).attr('href', "students.php");
            }
            else {
                toastr.error(response['message']);
            }

        }).fail(function (error) {
            console.log(error);
        })

    }
})