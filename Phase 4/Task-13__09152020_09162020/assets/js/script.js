$(document).ready(function () {

    $('input').change(function () {
        changeFont();
    })

    // FUNCTION TO CHANGE FONT SIZE
    function changeFont() {

        var fontSize = $('input').val()

        $('#font-size').html(fontSize);
        $('.content').css('fontSize', '' + fontSize + 'px')
    }
    changeFont();
})