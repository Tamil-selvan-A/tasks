// GET ELEMENTS
var fileInput = document.getElementById('file-input'),
    fileDetails = document.getElementById('file-details'),
    uploadButton = document.getElementById('upload-button');

// FIND FILE NAME AND SIZE
uploadButton.addEventListener('click', () => {

    var i, totalFiles = fileInput.files.length;

    for (i = 0; i < totalFiles; i++) {
        fileDetails.innerHTML += '<b>FileName:</b>' + ' ' + fileInput.files[i].name + ' ' + '<b>FileSize:</b>' + ' ' + fileInput.files[i].size + ' ' + 'KB' + '<br><br>';
    }
})