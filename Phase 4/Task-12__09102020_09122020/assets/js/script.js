
$(document).ready(function () {

    // CHECK PASSWORD STRENTH
    $('#password').keyup(function () {
        var password = $('#password').val();

        if (password.length == 0) {
            $('.progress-bar').text('Enter Password').css('width', '100%');
        }
        else if (password.length < 4) {
            $('.progress-bar').text('Very Week').css('width', '20%');
        }
        else if (password.length > 6) {
            $('.progress-bar').text('Week').css('width', '40%')
        }

        if (password.length > 8) {
            $('.progress-bar').text('Medium').css('width', '50%')
            $('#password-tips li:nth-child(1)').css('color', '#ffffff')
        }
        else {
            $('#password-tips li:nth-child(1)').css('color', 'unset')
        }

        if (password.match(/[A-Z]/)) {
            $('#password-tips li:nth-child(2)').css('color', '#ffffff')
        }
        else {
            $('#password-tips li:nth-child(2)').css('color', 'unset')
        }

        if (password.match(/[a-z]/)) {
            $('#password-tips li:nth-child(3)').css('color', '#ffffff')
        }
        else {
            $('#password-tips li:nth-child(3)').css('color', 'unset')
        }

        if (password.match(/[0-9]/)) {
            $('#password-tips li:nth-child(4)').css('color', '#ffffff')
        }
        else {
            $('#password-tips li:nth-child(4)').css('color', 'unset')
        }

        if (password.match(/[^a-zA-Z\d]/)) {
            $('#password-tips li:nth-child(5)').css('color', '#ffffff')
        }
        else {
            $('#password-tips li:nth-child(5)').css('color', 'unset')
        }

        if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z\d]/) && password.length > 10) {
            $('.progress-bar').text('Stong').css('width', '80%')
        }

        if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z\d]/) && password.length > 12) {
            $('.progress-bar').text('Very Stong').css('width', '100%')
        }
    })

    // SLIDE SHOW
    var images = ['slide-one', 'slide-two', 'slide-three', 'slide-four', 'slide-five', 'slide-six', 'slide-seven', 'slide-eight', 'slide-nine', 'slide-ten'];

    var count = 0;

    function slideShow() {

        if (count < images.length) {
            count += 1;
        }
        else {
            count = 1;
        }

        $('.slider-container').html('<img src="assets/images/' + images[count - 1] + '.jpg" alt="slide" class="img-fluid">')

    }
    slideShow();
    setInterval(slideShow, 3000);

    // STAR RATING SYSTEM

    $('.fa-star').mouseenter(function (e) {
        $(e.target).prevAll().removeClass('far').addClass('fas');
        $(e.target).removeClass('far').addClass('fas');
    });
    $('.fa-star').mouseleave(function (e) {
        $(e.target).prevAll().removeClass('fas').addClass('far');
        $(e.target).removeClass('fas').addClass('far');
    });
    $('.fa-star').click(function (e) {
        $(e.target).off('mouseleave').prevAll().removeClass('far').addClass('fas');
        $(e.target).off('mouseleave').removeClass('far').addClass('fas');
    });

    $('#mobile').keypress(function (e) {
        var regex = new RegExp("^[0-9\+-\-()]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    });

    function validateForm(e) {

        // NAME VALIDATION
        if ($('#name').val() == '') {
            $('#name-error').text('PLEASE ENTER NAME')
        }
        else if ($('#name').val().match(/[0-9]/)) {
            $('#name-error').text('NAME CAN NOT CONTAIN NUMBERS')
        }
        else if ($('#name').val().match(/[^a-zA-Z\d]/)) {
            $('#name-error').text('NAME CAN NOT CONTAIN SPECIAL CHARACTERS')
        }
        else {
            $('#name-error').text('')
        }

        // EMAIL VALIDATION
        if ($('#email').val() == '') {
            $('#email-error').text('PLEASE ENTER EMAIL')
        }
        else if ($('#email').val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            $('#email-error').text('')
        }
        else {
            $('#email-error').text('PLEASE ENTER VALID EMAIL')
        }

        // MOBILE NUMBER VALIDATION
        if ($('#mobile').val() == '') {
            $('#mobile-error').text('PLEASE ENTER MOBILE NUMBER')
        }
        else if ($('#mobile').val().match(/[^0-9\-+()\/]/)) {
            $('#mobile-error').text('MOBILE NUMBER CAN NOT CONTAIN SPECIAL CHARACTER')
        }
        else if ($('#mobile').val().match(/[0-9]/)) {
            $('#mobile-error').text('')
        }
        else {
            $('#mobile-error').text('PLEASE ENTER VALID MOBILE NUMBER')
        }

        // AGE VALIDATION
        if ($('#age').val() == '') {
            $('#age-error').text('PLEASE ENTER AGE')
        }
        else if ($('#age').val().match(/[a-zA-Z]/)) {
            $('#age-error').text('AGE CAN NOT CONTAIN LETTERS')
        }
        else if ($('#age').val().match(/[^a-zA-Z()\d]/)) {
            $('#age-error').text('AGE CAN NOT CONTAIN SPECIAL CHARACTERS')
        }
        else if ($('#age').val() < 1 || $('#age').val() > 120) {
            $('#age-error').text('ENTER AGE BETWEEN 1 AND 120')
        }
        else if ($('#age').val().match(/[0-9]/)) {
            $('#age-error').text('')
        }
    }

    $('#registration input').keydown(validateForm);
    $('#submit').click(validateForm);


    // DRAG AND DROP
    $('#drag p').draggable({
        helper: 'clone'
    });

    $('#drop').droppable({
        drop: function (event, ui) {
            $('#drop').append(ui.draggable);

            $.alert({
                title: 'MESSAGE',
                content: 'Your Element Moved',
            });

        }
    });

})