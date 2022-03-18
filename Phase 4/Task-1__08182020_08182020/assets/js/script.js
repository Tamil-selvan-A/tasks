var one = document.getElementById('num-one');
var two = document.getElementById('num-two');
var btn = document.getElementById('submit');
var output = document.getElementById('output')

btn.addEventListener('click', sum);
function sum() {
    output.innerHTML = parseInt(one.value) + parseInt(two.value);
};