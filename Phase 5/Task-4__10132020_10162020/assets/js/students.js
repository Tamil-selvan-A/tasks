$(document).ready(function () {

    var nameError, regNoError, markOneError, markTwoError, markThreeError;
    var form = $('#form');
    var updateId;

    $('.table-container').load("student_table.php");
    $('#update').hide();

    // ADD STUDENT BUTTON CLICK EVENTS
    $('.add-student').on('click', function () {
        $(this).hide();
        $('.form-container').animate({ minWidth: '300px', padding: '1.5rem' });
        $('.form-title').html('Add New Student');
    })

    // TO HIDE FORM
    $('.form-button').on('click', function (e) {
        e.preventDefault();
        validateForm();
    })

    // VALIDATE ON INPUTS KEYUP
    $('input').keyup(function () {
        validateForm();
    })

    // PREVENT LETTERS FROM TYPING
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
    function validateForm() {

        // NAME VALIDATION
        if ($('#name').val() == '') {
            $('#name-error').html('Please Enter Name');
            nameError = 1;
        }
        else {
            $('#name-error').html('');
            nameError = 0;
        }

        // REGISTER NO VALIDATION
        if ($('#reg-no').val() == '') {
            $('#reg-no-error').html('Please Enter Register Number');
            regNoError = 1;
        }
        else {
            $('#reg-no-error').html('');
            regNoError = 0;
        }

        // MARK ONE VALIDATION
        if ($('#mark-one').val() == '') {
            $('#mark-one-error').html('Please Enter Mark One');
            markOneError = 1;
        }
        else if (($('#mark-one').val()) > 100) {
            $('#mark-one-error').html('Mark sholud be less than oe euqal to 100');
            markOneError = 1;
        }
        else {
            $('#mark-one-error').html('');
            markOneError = 0;
        }

        // MARK TWO VALIDATION
        if ($('#mark-two').val() == '') {
            $('#mark-two-error').html('Please Enter Mark Two');
            markTwoError = 1;
        }
        else if (($('#mark-two').val()) > 100) {
            $('#mark-two-error').html('Mark sholud be less than oe euqal to 100');
            markTwoError = 1;
        }
        else {
            $('#mark-two-error').html('');
            markTwoError = 0;
        }

        // MARK THREE VALIDATION
        if ($('#mark-three').val() == '') {
            $('#mark-three-error').html('Please Enter Mark Three');
            markThreeError = 1;
        }
        else if (($('#mark-three').val()) > 100) {
            $('#mark-three-error').html('Mark sholud be less than oe euqal to 100');
            markThreeError = 1;
        }
        else {
            $('#mark-three-error').html('');
            markThreeError = 0;
        }
    }

    // ADD STUDENT
    $('#submit').on('click', function (e) {

        if (nameError == 0 && regNoError == 0 && markOneError == 0 && markTwoError == 0 && markThreeError == 0) {
            var formData = form.serialize();
            $('.form-container').animate({ minWidth: '0', padding: '0' });
            $('.add-student').show();

            $.ajax({
                url: 'actions/add_student.act.php',
                type: 'POST',
                data: 'action=addStudent&' + formData,
                dataType: 'JSON'
            }).done(function (response) {
                if (response['status'] == 'Success') {
                    $('#form')[0].reset();
                    $('.table-container').load("student_table.php");
                    toastr.info('Student added successfully');
                }
                else {
                    toastr.info('Error when adding student');
                }
            }).fail(function (error) {
                console.log(error);
                toastr.info('Failed to add Student');
            });
        }
    })

    // DELETE STUDENT
    $(document).on('click', '.fa-trash', function () {
        var deleteId = $(this).attr("id");
        var deleteRow = $(this).closest('tr');

        $.confirm({
            title: 'Message',
            content: 'Aru you really want to delete ?',
            autoClose: 'cancelAction|8000',
            buttons: {
                deleteUser: {
                    text: 'delete',
                    action: function () {
                        deleteStudent();
                    }
                },
                cancelAction: function () {
                    $.alert('Student not deleted!');
                }
            }
        });

        // DELETE STUDENT FUNCTION
        function deleteStudent() {
            $.ajax({
                url: 'actions/delete_student.act.php',
                type: 'POST',
                data: 'action=deleteStudent&deleteId=' + deleteId,
                dataType: 'JSON'
            }).done(function (response) {
                if (response['status'] == 'Success') {
                    deleteRow.fadeOut(800);
                    toastr.info('Student deleted successfully');
                }
            }).fail(function (error) {
                console.log(error);
                toastr.info('Failed to delete Student');
            });
        }
    })

    // EDIT ICON CLICK EVENT
    $(document).on('click', '.fa-edit', function () {
        updateId = $(this).attr('id');
        var td = $(this).closest('tr').children();
        var name = td.eq(0).text();
        var regNo = td.eq(1).text();
        var markOne = td.eq(2).text();
        var markTwo = td.eq(3).text();
        var markThree = td.eq(4).text();

        $('.form-container').animate({ minWidth: '300px', padding: '1.5rem' });
        $('.form-title').html('Update Student');

        $("#name").val(name);
        $("#reg-no").val(regNo);
        $("#mark-one").val(markOne);
        $("#mark-two").val(markTwo);
        $("#mark-three").val(markThree);

        $('#submit').hide();
        $('#update').show();
    });

    // UPDATE BUTTON CLICK EVENT
    $('#update').on('click', function () {

        if (nameError == 0 && regNoError == 0 && markOneError == 0 && markTwoError == 0 && markThreeError == 0) {
            var formData = form.serialize();
            updateStudent(formData);
            $('.form-container').animate({ minWidth: '0', padding: '0' });
            $('.add-student').show();
        }
    })

    // UPDATE STUDENT
    function updateStudent(formData) {
        $.ajax({
            url: 'actions/update_student.act.php',
            type: 'POST',
            data: 'action=updateStudent&updateId=' + updateId + '&' + formData,
            dataType: 'JSON'
        }).done(function (response) {
            if (response['status'] == 'Success') {
                $('.table-container').load("student_table.php");
                $('#update').hide();
                $('#submit').show();
                $('#form')[0].reset();
                toastr.info('Student updated successfully');
            }
        }).fail(function (error) {
            console.log(error);
            toastr.info('Failed to update Student');
        });
    };
})