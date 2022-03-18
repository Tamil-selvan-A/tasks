$(document).ready(function () {

    // DISPLAY TABLE
    var fileInfo = JSON.parse(localStorage.getItem('filesinfo'))
    var row;
    for (var i = 0; i < fileInfo.length; i++) {
        row =
            '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' + fileInfo[i].Name + '</td>' +
            '<td>' + fileInfo[i].Size + '</td>' +
            '<td>' + fileInfo[i].Extention + '</td>' +
            '</tr>';
        document.querySelector('tbody').innerHTML += row;
    }
})