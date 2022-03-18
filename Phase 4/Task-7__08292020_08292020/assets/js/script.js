// GET INPUT VALUES
let addButton = document.getElementById('add'),
    list = document.getElementById('list'),
    warning = document.getElementById('warning');

// CREATE LIST ITEM FROM HTML
addButton.addEventListener('click', (e) => {
   var listInput = document.getElementById('list-input').value,
       listDate = new Date();
    var listItemText = '<li class="d-flex align-items-center justify-content-between list"><div><input type="checkbox" class="checkbox mr-3"><span class="list-text mb-0">' + listInput + '</span></div><div><span class="badge badge-primary">' + listDate.toLocaleDateString() + '  ' + listDate.toLocaleTimeString() + '</span><i class="far fa-edit p-3 edit"></i><i class="far fa-trash-alt p-3 dd"></i></div></li>'
    
    // EMPTY FORM VALIDATION
    
    if (listInput == '') {
        warning.classList.remove('remove');
    }
    else {
        list.innerHTML += listItemText;
        warning.classList.add('remove');

        listInput = '';
        console.log(listInput);
        // console.log(listInput);
    }
    console.log(listInput);

});

// FUNCTION TO DELETE EDIT MARK
list.addEventListener('click', (e) => {

    if (e.target.classList[1] == 'fa-trash-alt') {
        e.target.parentElement.parentElement.classList.add('remove');
    }

    if (e.target.classList[3] == 'edit') {
        e.target.parentElement.previousElementSibling.lastElementChild.contentEditable = true;
        e.target.parentElement.previousElementSibling.lastElementChild.focus();
    }

    if (e.target.classList[0] == 'checkbox') {
        if (e.target.checked == true) {
            console.log(e.target.nextElementSibling);
            e.target.nextElementSibling.classList.add('checked-list');
        }
        else {
            e.target.nextElementSibling.classList.remove('checked-list');
        }
    }
})
