$(document).ready(function () {

    // CREATE FILE DETAILS ARRAY
    const fileArray = [];

    // DRAG AND DROP
    $('.drop').on({
        'dragenter dragover': function (e) {
            e.preventDefault();
            $('.drop').css('border', '2px dotted #000')
        },
        'dragleave': function (e) {
            $('.drop').css('border', '2px dotted transparent')
            e.preventDefault();
        },

        // FUNCTION ON DROP
        'drop': function (e) {
            e.preventDefault();
            let file = e.originalEvent.dataTransfer.files;
            upload(file);
        }
    })

    // BROWSE BUTTON
    $('#file-input').on({
        'change': function (e) {
            let file = e.target.files;
            upload(file);
            $('#file-input').val(null)
        }
    })

    // FUNCTION TO UPLOAD FILES
    function upload(file) {

        $('.drop').css('border', '2px dotted transparent')

        let totalFiles = file.length;

        // LOOP FILES
        for (var i = 0; i < totalFiles; i++) {
            var name = file[i].name;
            var size = file[i].size;

            // FOR TXT FILE FORMATS
            if (file[i].type == 'text/plain') {
                var extention = 'txt';
            }
            else {
                extention = file[i].type.split('/').pop();
            }

            // TO CALCULATE MEMORY SIZE
            if (size < 1024) {
                var memoryUnit = 'Bytes'
                var sizeConverted = size.toFixed(2)
            }
            else if ((1024 <= size) && (size < 1048576)) {
                memoryUnit = 'KB'
                sizeConverted = (size / 1024).toFixed(2)
            }
            else if ((1048576 <= size) && (size < 1073741824)) {
                memoryUnit = 'MB'
                sizeConverted = (size / 1048576).toFixed(2)
            }
            else if ((size > 1099511627776)) {
                $.alert('File Size is Too Large', 'Alert!');
                return;
            }

            var fileObject = {
                Name: name,
                Size: size,
                Extention: extention
            };

            // TO CHECK FILE ALREADY EXISTS
            for (var fileCheck of fileArray) {
                if (name == fileCheck.Name && size == fileCheck.Size && extention == fileCheck.Extention) {
                    $('.file-check').html('Sorry, file already exists.')
                    return;
                }
                else {
                    $('.file-check').html('');
                }
            }

            // CHECK ALLOWED FILE EXTENTIONS
            if (fileObject.Extention.match('jpg') || fileObject.Extention.match('jpeg')
                || fileObject.Extention.match('png') || fileObject.Extention.match('txt')
                || fileObject.Extention.match('csv') || fileObject.Extention.match('pdf')
                || fileObject.Extention.match('xlsx') || fileObject.Extention.match('docx')
                || fileObject.Extention.match('pptx')) {

                fileArray.push(fileObject);
                // SAVE IN LOCAL STORAGE
                localStorage.setItem('filesinfo', JSON.stringify(fileArray));

                // SHOW FILE DETAILS
                var fileDetailsElement =
                    '<div class="d-flex align-items-center justify-content-between my-3">' +
                    '<div class="d-flex align-items-center">' +
                    '<div>' +
                    '<p class="format rounded-circle mr-2 mb-0"><small> ' + fileObject.Extention + ' </small></p>' +
                    '</div>' +
                    '<div>' +
                    '<p class="mb-0 file-name"> ' + fileObject.Name + ' </p>' +
                    '<p class="mb-0 file-size text-secondary"> ' + sizeConverted + ' ' + memoryUnit + ' </p>' +
                    '</div>' +
                    '</div>' +
                    '<i class="fas fa-trash p-2"></i>' +
                    '</div>';
                document.querySelector('.file-details-container').innerHTML += fileDetailsElement;
            }
            else {
                $.alert('File Format Not Supported', 'Alert!');
                console.log(fileObject.Extention);
            }
        }
    }

    // TO REMOVE FILE FROM DOM AND ARRAY
    $(document).on('click', '.fa-trash', function () {

        $(this).parent().remove();
        $('.file-check').html('');

        var removedItem = $(this).siblings().find('.file-name').text().trim()

        for (var i = 0; i < fileArray.length; i++) {
            if (fileArray[i].Name == removedItem) {
                fileArray.splice(i, 1)
            }
        }

        // SAVE IN LOCAL STORAGE
        localStorage.setItem('filesinfo', JSON.stringify(fileArray));
    })

    // SUBMIT 
    $('.submit').click(function (e) {
        e.preventDefault();
        if (fileArray.length == 0) {
            $.alert('Please Choose Files', 'Message!');
        }
        else if ($('textarea').val() == '') {
            $('.comment-error').html('Please Enter Comments')
        }
        else {
            $('.comment-error').html('')
            $.alert({
                title: 'Success!',
                content: '<p>Files uploaded successfully</p><br><a href="data.html" class="btn btn-success btn-block mx-auto" target="_blank">VIEW</a>'
            })
        }
    })
})