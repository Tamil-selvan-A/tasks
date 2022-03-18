$(document).ready(function () {

    $('.table-container').load("view.php");

    $('input').keyup(function () {
        validate();
    })

    $('.number').keypress(function (e) {
        preventLetters(e);
    });

    function preventLetters(e) {
        var regex = new RegExp("[0-9]");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    }
    var nameError, dojError, dobError, salaryError, hraError, daError;
    function validate() {

        // NAME VALIDATION
        if ($('.name').val() == '') {
            $('.name-error').html('Please enter name');
            nameError = 1;
        } else {
            $('.name-error').html('');
            nameError = 0;
        }

        // DOJ VALIDATION
        if ($('.doj').val() == '') {
            $('.doj-error').html('Please enter Date of Joining');
            dojError = 1;
        }
        else {
            $('.doj-error').html('');
            dojError = 0;
        }

        // DOJ VALIDATION
        if ($('.dob').val() == '') {
            $('.dob-error').html('Please enter Date of Birth');
            dobError = 1;
        }
        else {
            $('.dob-error').html('');
            dobError = 0;
        }

        // BASIC SALARY VALIDATION
        if ($('.salary').val() == '') {
            $('.salary-error').html('Please enter Basic Salary');
            salaryError = 1;
        }
        else {
            $('.salary-error').html('');
            salaryError = 0;
        }

        // HRA VALIDATION
        if ($('.hra').val() == '') {
            $('.hra-error').html('Please enter HRA');
            hraError = 1;
        }
        else if ($('.hra').val() > (($('.salary').val()) / 2)) {
            $('.hra-error').html('HRA should be less than or euqal to 50% of basic salary');
            hraError = 1;
        }
        else {
            $('.hra-error').html('');
            hraError = 0;
        }

        // DA VALIDATION
        if ($('.da').val() == '') {
            $('.da-error').html('Please enter DA');
            daError = 1;
        }
        else if ($('.da').val() > (($('.salary').val()) / 2)) {
            $('.da-error').html('DA should be less than or euqal to 50% of basic salary');
            daError = 1;
        }
        else {
            $('.da-error').html('');
            daError = 0;
        }
    }

    var formData;
    // VALIDATE ON SUBMIT
    $('#form').on('submit', function (e) {
        e.preventDefault();
        validate();
        var $form = $(this);

        // TO PREVENT FORM FROM SUBMITTING
        if ((nameError == 0 && dojError == 0 && dobError == 0 && salaryError == 0 && hraError == 0 && daError == 0)) {
            formData = $form.serialize();
            // formArray = $form.serializeArray();
            $.ajax({
                url: 'employees.act.php',
                type: 'POST',
                data: 'action=addEmployee&' + formData,
                dataType: 'JSON'

            }).done(function (response) {
                if (response['status'] == 'Success') {
                    $('#form')[0].reset();
                    $('.table-container').load("view.php");
                    toastr.info('Employee added successfully');
                }
                else {
                    alert("error");
                }
            }).fail(function (error) {
                console.log(error);
                toastr.info('Failed to add Employee');
            });
        }
    })

    $(document).on('click', '.fa-trash', function () {
        var delId = $(this).attr("id");
        var deleteRow = $(this).closest('tr');

        // jquery confirm
        $.confirm({
            title: 'Delete employee?',
            content: 'Are you really want to delete ?',
            autoClose: 'cancel|8000',
            buttons: {
                deleteUser: {
                    text: 'delete',
                    action: function () {
                        deleteEmployee();
                    }
                },
                cancelAction: function () {
                    $.alert('Your employee saved!');
                }
            }
        });
        function deleteEmployee() {
            $.ajax({
                url: 'employees.act.php',
                type: 'POST',
                data: 'action=deleteEmployee&delId=' + delId,
                dataType: 'JSON'
            }).done(function (response) {
                if (response['status'] == 'Success') {
                    deleteRow.fadeOut(800);
                    toastr.info('Employee deleted successfully');
                }
            }).fail(function (error) {
                console.log(error);
                toastr.info('Failed to delete Employee');
            });
        }
    })

    var updateId;
    $('#update').hide();
    $(document).on('click', '.fa-edit', function () {
        updateId = $(this).attr('id');
        var td = $(this).closest('tr').children();
        var name = td.eq(0).text();
        var doj = td.eq(1).text();
        var dob = td.eq(2).text();
        var basicSalary = td.eq(3).text();
        var hra = td.eq(4).text();
        var da = td.eq(5).text();
        // alert(updateId);

        $("#name").val(name);
        $("#doj").val(doj);
        $("#dob").val(dob);
        $("#basic-salary").val(basicSalary);
        $("#hra").val(hra);
        $("#da").val(da);

        $('#submit').hide();
        $('#update').show();
        validate();
    });

    $('#update').on('click', function () {

        formData = $("#form").serialize();
        validate();
        updateEmployee(formData);

    })

    function updateEmployee() {
        $.ajax({
            url: 'employees.act.php',
            type: 'POST',
            data: 'action=updateEmployee&updateId=' + updateId + '&' + formData,
            dataType: 'JSON'
        }).done(function (response) {
            if (response['status'] == 'Success') {
                $('.table-container').load("view.php");
                $('#update').hide();
                $('#submit').show();
                $('#form')[0].reset();
                toastr.info('Employee updated successfully');
            }
        }).fail(function (error) {
            console.log(error);
            toastr.info('Failed to update Employee');
        });
    };
})