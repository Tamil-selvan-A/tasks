
$(document).ready(function () {

    // DATA ARRAY
    var dataArray = [

        { Serial: 1, Name: 'Ram', Age: 20, DOB: '10-10-1998', Destination: 'Trainee', Email: 'gyassi@hogee.com', DOJ: '2020-08-10' },
        { Serial: 2, Name: 'Sabeeshan', Age: 21, DOB: '11-10-1998', Destination: 'Employee', Email: 'calin@sbcglobal.net', DOJ: '2020-09-11' },
        { Serial: 3, Name: 'Vilooshan', Age: 22, DOB: '12-10-1998', Destination: 'Trainee', Email: 'grdschl@icloud.com', DOJ: '2020-08-12' },
        { Serial: 4, Name: 'Yarlanan', Age: 23, DOB: '13-10-1998', Destination: 'Trainee', Email: 'campware@msn.com', DOJ: '2020-06-13' },
        { Serial: 5, Name: 'Inpan', Age: 24, DOB: '14-10-1998', Destination: 'Employee', Email: 'ccohen@outlook.com', DOJ: '2020-06-14' },
        { Serial: 6, Name: 'Aahilyan', Age: 25, DOB: '15-10-1998', Destination: 'Trainee', Email: 'rsteiner@outlook.com', DOJ: '2020-01-15' },
        { Serial: 7, Name: 'Gowthrayan', Age: 26, DOB: '10-11-1998', Destination: 'Employee', Email: 'monopole@aol.com', DOJ: '2020-02-16' },
        { Serial: 8, Name: 'Dharun', Age: 27, DOB: '10-12-1998', Destination: 'Trainee', Email: 'zeitlin@hotmail.com', DOJ: '2020-03-17' },
        { Serial: 9, Name: 'Kumar', Age: 28, DOB: '5-03-1999', Destination: 'Trainee', Email: 'bwcarty@icloud.com', DOJ: '2020-04-18' },
        { Serial: 10, Name: 'Elayaraja', Age: 29, DOB: '25-04-1998', Destination: 'Employee', Email: 'mirod@mac.com', DOJ: '2020-05-19' },
        { Serial: 11, Name: 'Aruvaanan', Age: 30, DOB: '26-05-1998', Destination: 'Trainee', Email: 'dwheeler@verizon.net', DOJ: '2020-06-20' },
        { Serial: 12, Name: 'Pukazhanthi', Age: 31, DOB: '27-06-1998', Destination: 'Employee', Email: 'penna@aol.com', DOJ: '2020-07-21' },
        { Serial: 13, Name: 'Ritikaa', Age: 32, DOB: '28-07-1998', Destination: 'Trainee', Email: 'parksh@outlook.com', DOJ: '2020-08-22' },
        { Serial: 14, Name: 'Nilanjana', Age: 33, DOB: '29-08-1998', Destination: 'Trainee', Email: 'msusa@me.com', DOJ: '2020-01-23' },
        { Serial: 15, Name: 'Sithrani', Age: 34, DOB: '30-12-1998', Destination: 'Trainee', Email: 'mcnihil@sbcglobal.net', DOJ: '2020-02-24' },
        { Serial: 16, Name: 'Tanishia', Age: 35, DOB: '31-11-1998', Destination: 'Trainee', Email: 'wainwrig@optonline.net', DOJ: '2020-03-25' },
        { Serial: 17, Name: 'Jathurshnee', Age: 22, DOB: '01-10-1998', Destination: 'Employee', Email: 'kaiser@me.com', DOJ: '2020-04-26' },
        { Serial: 18, Name: 'Namesha', Age: 24, DOB: '02-01-1998', Destination: 'Trainee', Email: 'barlow@verizon.net', DOJ: '2020-05-27' },
        { Serial: 19, Name: 'Vasanthana', Age: 26, DOB: '03-10-1998', Destination: 'Trainee', Email: 'bader@yahoo.ca', DOJ: '2020-06-28' },
        { Serial: 20, Name: 'Mohana', Age: 28, DOB: '04-02-1998', Destination: 'Trainee', Email: 'gavinls@msn.com', DOJ: '2020-07-10' },
        { Serial: 21, Name: 'Thibika', Age: 23, DOB: '05-03-1998', Destination: 'Trainee', Email: 'eegsa@yahoo.ca', DOJ: '2020-08-01' },
        { Serial: 22, Name: 'Pavira', Age: 21, DOB: '06-04-1998', Destination: 'Employee', Email: 'kjetilk@yahoo.ca', DOJ: '2020-08-12' },
        { Serial: 23, Name: 'Ilanthiraiyan', Age: 20, DOB: '07-05-1998', Destination: 'Trainee', Email: 'stellaau@msn.com', DOJ: '2020-05-13' },
        { Serial: 24, Name: 'Sanju', Age: 25, DOB: '08-06-1998', Destination: 'Trainee', Email: 'falcao@sbcglobal.net', DOJ: '2020-02-14' },
        { Serial: 25, Name: 'Dinush', Age: 33, DOB: '09-07-1998', Destination: 'Trainee', Email: 'srwelty@yahoo.ca', DOJ: '2020-01-15' },
        { Serial: 26, Name: 'Methera', Age: 35, DOB: '10-08-1998', Destination: 'Employee', Email: 'skythe@msn.com', DOJ: '2020-06-16' },
        { Serial: 27, Name: 'Vinoshini', Age: 40, DOB: '11-09-1998', Destination: 'Trainee', Email: 'terjesa@yahoo.com', DOJ: '2020-07-17' },
        { Serial: 28, Name: 'Aathaven', Age: 45, DOB: '12-11-1998', Destination: 'Trainee', Email: 'doche@outlook.com', DOJ: '2020-07-18' },
        { Serial: 29, Name: 'Abinath', Age: 46, DOB: '13-10-1998', Destination: 'Trainee', Email: 'ramollin@gmail.com', DOJ: '2020-03-19' },
        { Serial: 30, Name: 'Ramesh', Age: 48, DOB: '14-12-1998', Destination: 'Employee', Email: 'rsteiner@hotmail.com', DOJ: '2020-04-13' }

    ];

    // TO SHOW ALL DATA
    function showAll() {

        // document.querySelector('tbody').innerHTML = '';
        $('tbody').innerHTML = '';

        // ROW FORMAT AND DISPLAY TABLE ROW IN TABLE
        for (var i = 0; i < dataArray.length; i++) {

            var row =
                '<tr>' +
                '<td>' + dataArray[i].Serial + '</td>' +
                '<td>' + dataArray[i].Name + '</td>' +
                '<td>' + dataArray[i].Age + '</td>' +
                '<td>' + dataArray[i].DOB + '</td>' +
                '<td>' + dataArray[i].Destination + '</td>' +
                '<td>' + dataArray[i].Email + '</td>' +
                '<td>' + dataArray[i].DOJ + '</td>' +
                '</tr>';

            $('tbody').innerHTML += row;

        }
    }
    showAll();

    //KEY UP IN SEERACH BOX
    $('.search').on({'keyup': function () {

            // SEARCH BOX
            var searchValue = $('.search').val();
            var row = '';

            document.querySelector('tbody').innerHTML = row;

            // FILTER ARRAY BASED ON SREACH BOX VALUE
            var filteredArray = dataArray.filter(function (e) {
                return e.Name.toLowerCase().match(searchValue.toLowerCase()) ||
                    e.Age.toString().includes(searchValue.toString()) ||
                    e.DOB.includes(searchValue) ||
                    e.Destination.toLowerCase().includes(searchValue.toLowerCase()) ||
                    e.Email.toLowerCase().includes(searchValue.toLowerCase()) ||
                    e.DOJ.includes(searchValue);
            });

            // DISPLAY FILTERED ARRAY BASED ON SEARCH BOX
            for (var i = 0; i < filteredArray.length; i++) {

                row =
                    '<tr>' +
                    '<td>' + filteredArray[i].Serial + '</td>' +
                    '<td>' + filteredArray[i].Name + '</td>' +
                    '<td>' + filteredArray[i].Age + '</td>' +
                    '<td>' + filteredArray[i].DOB + '</td>' +
                    '<td>' + filteredArray[i].Destination + '</td>' +
                    '<td>' + filteredArray[i].Email + '</td>' +
                    '<td>' + filteredArray[i].DOJ + '</td>' +
                    '</tr>';

                document.querySelector('tbody').innerHTML += row;
            }
        }
    })

    // DATE OF JOINING FILTER
    $('.doj-filter').click(function (e) {

        e.preventDefault();

        var dojFilter;



        // ALERT IF DATE NOT SELECTED
        if ($('.doj').val() == '') {
            alert('Please Select Dates To Filter')
        }
        else {
            var dojFrom = $('.doj-start').val(),
                dojTo = $('.doj-end').val(),
                row = '';
            document.querySelector('tbody').innerHTML = row;

            // DOJ FILTER FUNCTION
            if ($('.doj-end').val() == '') {
                dojFilter = dataArray.filter(function (e) {
                    return (e.DOJ) > dojFrom;
                })
            }
            else {
                dojFilter = dataArray.filter(function (e) {
                    return (e.DOJ) > dojFrom && (e.DOJ) < dojTo;
                })
            }
        }

        // DISPLAY FILTERED ARRAY
        for (var i = 0; i < dojFilter.length; i++) {
            row =
                '<tr>' +
                '<td>' + dojFilter[i].Serial + '</td>' +
                '<td>' + dojFilter[i].Name + '</td>' +
                '<td>' + dojFilter[i].Age + '</td>' +
                '<td>' + dojFilter[i].DOB + '</td>' +
                '<td>' + dojFilter[i].Destination + '</td>' +
                '<td>' + dojFilter[i].Email + '</td>' +
                '<td>' + dojFilter[i].DOJ + '</td>' +
                '</tr>';

            document.querySelector('tbody').innerHTML += row;
        }
    })

    // RESTORE ALL VALUES
    $('.doj-restore').click(function (e) {
        e.preventDefault();
        showAll();
        $('.doj').val('');
        $('.search').val('');
    });


    // PAGINATION START
    $('.visible-rows').change(function () {
        createPaginationNumbers();
        var x = 0, y = x + itemsPerPage;
        pagination(x, y)
    })



    var itemsPerPage;
    function createPaginationNumbers() {
        itemsPerPage = Number($('.visible-rows').val());
        var totalPages = (dataArray.length) / itemsPerPage;
        console.log(totalPages);

        document.querySelector('.pagination').innerHTML = '';

        for (var i = 0; i < totalPages; i++) {
            console.log(i + 1);
            var paginationNumbers =
                '<li class="page-item">' +
                '<a class="page-link text-dark pagination-button" href="#">' + (i + 1) + '</a>' +
                '</li>';
            document.querySelector('.pagination').innerHTML += paginationNumbers;
        }
    }
    createPaginationNumbers();



    // SELECT FILTER
    // function changeVisibleRows() {

    //     var rowNumber = $('.visible-rows').val();

    //     for (var i = rowNumber; i > 0; i--) {

    //         $('tbody').children()[i].style.display = 'table-row';
    //     }

    //     for (var i = rowNumber; i < ($('tbody').children().length); i++) {
    //         $('tbody').children()[i].style.display = 'none';
    //     }
    // }
    // changeVisibleRows();

    // SELECT FILTER WHEN CHANGE EVENT OCCURS IN SELECT 
    // $('.visible-rows').change(function () {
    //     changeVisibleRows();
    // })

    var x = 0, y = x + itemsPerPage, index;

    $(document).on('click', '.pagination-button', function(e){ 

        index = $('.pagination-button').index(this);
        x = ((($('.pagination-button').index(this))) * itemsPerPage);
        y = x + itemsPerPage;

        e.preventDefault();
        pagination(x, y);
        disableEnableButtons();
     });
    

    // $('.pagination-button').click(function (e) {

    //     index = $('.pagination-button').index(this);
    //     x = ((($('.pagination-button').index(this))) * itemsPerPage);
    //     y = x + itemsPerPage;

    //     e.preventDefault();
    //     pagination(x, y);
    //     disableEnableButtons();
    // })

    function disableEnableButtons() {

        // TO DIABLE ENABLE THE PREVIOUS BUTTON
        if (index < 1 || x < 1) {
            $('.previous').attr('disabled', 'disabled')
        }
        else {
            $('.previous').removeAttr('disabled')
        }

        // TO DIABLE ENABLE THE NEXT BUTTON
        if (index > 1 || x > 19) {
            $('.next').attr('disabled', 'disabled')
        }
        else {
            $('.next').removeAttr('disabled')
        }
    }

    // PREVIOUS BUTTON
    $('.previous').click(function (e) {
        x -= 10
        let y = x + 10;
        pagination(x, y);
        disableEnableButtons();
    })

    // NEXT BUTTON
    $('.next').click(function (e) {
        x += 10
        let y = x + 10;
        pagination(x, y);
        disableEnableButtons();
    })

    // PAGINATION FUNCTION
    function pagination(x, y) {

        document.querySelector('tbody').innerHTML = '';

        for (x; x < y; x++) {
            row =
                '<tr>' +
                '<td>' + dataArray[x].Serial + '</td>' +
                '<td>' + dataArray[x].Name + '</td>' +
                '<td>' + dataArray[x].Age + '</td>' +
                '<td>' + dataArray[x].DOB + '</td>' +
                '<td>' + dataArray[x].Destination + '</td>' +
                '<td>' + dataArray[x].Email + '</td>' +
                '<td>' + dataArray[x].DOJ + '</td>' +
                '</tr>';

            document.querySelector('tbody').innerHTML += row;
        }
    }
    pagination(x, y)
})