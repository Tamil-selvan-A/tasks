// GET DIGITAL CLOCK VALUES FROM DOM
let digitalHours = document.getElementById('hours'),
    digitalMinutes = document.getElementById('minutes'),
    digitalSeconds = document.getElementById('seconds'),
    meridiem = document.getElementById('meridiem'),
    digitalDay = document.getElementById('day'),
    digitalDate = document.getElementById('date'),
    digitalMonth = document.getElementById('month'),
    digitalYear = document.getElementById('year');

// GET ANALOG HANDS
let analogHours = document.getElementById('analog-hours'),
    analogMinutes = document.getElementById('analog-minutes'),
    analogSeconds = document.getElementById('analog-seconds');

// CLOCK FUNCTION
function digitalTime() {

    // GET CURRENT TIME
    let getDate = new Date(),
        hours = getDate.getHours(),
        minutes = getDate.getMinutes(),
        seconds = getDate.getSeconds(),
        day = getDate.getDay(),
        date = getDate.getDate(),
        month = getDate.getMonth() + 1,
        year = getDate.getFullYear(),
        currentMeridiem = 'AM';

    let days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    // 24 HOURS FORMAT TO 12 HOURS FORMAT
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        currentMeridiem = 'PM';
    }

    // CONVERT SINGLE DIGIT TO DOUBLE DIGIT
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
         seconds = '0' + seconds;
    }

    // SET TIME IN DIGITAL CLOCK
    digitalSeconds.innerHTML = seconds;
    digitalHours.innerHTML = hours;
    digitalMinutes.innerHTML = minutes;
    meridiem.innerHTML = currentMeridiem;

    // SET DATE IN DIGITAL CLOCK
    digitalDay.innerHTML = days[day];
    digitalDate.innerHTML = date;
    digitalMonth.innerHTML = month;
    digitalYear.innerHTML = year;

    // SET TIME IN ANALOG CLOCK
    analogHours.style.transform = 'rotate(' + (hours * 30) + 'deg';
    analogMinutes.style.transform = 'rotate(' + (minutes * 6) + 'deg';
    analogSeconds.style.transform = 'rotate(' + (seconds * 6) + 'deg';
}

// MAKE CLOCK LIVE 
digitalTime();
setInterval(digitalTime, 1);

// TOGGLE CLOCKS
document.querySelector('.digital-clock-btn').addEventListener('click', showDigital);
document.querySelector('.analog-clock-btn').addEventListener('click', showAnalog);

function showDigital() {
    document.querySelector('#digital').classList.add('show');
    document.querySelector('#digital').classList.remove('hide');
    document.querySelector('#analog').classList.add('hide');
    document.querySelector('#analog').classList.remove('show');
};

function showAnalog() {
    document.querySelector('#analog').classList.add('show');
    document.querySelector('#analog').classList.remove('hide');
    document.querySelector('#digital').classList.add('hide');
    document.querySelector('#digital').classList.remove('show');
};