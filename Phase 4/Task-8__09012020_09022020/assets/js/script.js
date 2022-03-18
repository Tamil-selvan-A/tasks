// // GET SEND BUTTONS AND INPUTS
let sendOne = document.getElementById('send-one'),
    sendTwo = document.getElementById('send-two'),
    inputOne = document.getElementById('input-one'),
    inputTwo = document.getElementById('input-two');

// SEND FROM USER ONE
sendOne.addEventListener('click', () => {
    sendMessage('left');
})

// SEND FROM USER TWO
sendTwo.addEventListener('click', () => {
    sendMessage('right');
})

// USER ONE TYPING STATUS
inputOne.addEventListener('keyup', () => {
    document.getElementById('user-two-status').innerHTML = 'Typing...';
})

//  USER TWO TYPING STATUS
inputTwo.addEventListener('keyup', () => {
    document.getElementById('user-one-status').innerHTML = 'Typing...';
})

function sendMessage(sender) {
    var senderId = '';
    var receiverId = '';
    if (sender == 'left') { 
        senderId = 'one';
        receiverId = 'two';
    }
    else if (sender == 'right') { 
        senderId = 'two';
        receiverId = 'one';
    }

    let inputOne = document.getElementById('input-'+senderId).value,
        chatOne = document.getElementById('chat-'+senderId+'-messages'),
        chatTwo = document.getElementById('chat-'+receiverId+'-messages'),
        userTwoStatus = document.getElementById('user-'+receiverId+'-status'),
        time = new Date().toLocaleTimeString();

    // CHECK EMPTY MESSAGE AND SEND USER MESSAGE
    if (inputOne == '') {
        // chatOne.innerHTML += '<div class="d-flex justify-content-end"><p class="bg-secondary text-white">' + '<small class="mx-2">' + time + '</small>' + 'Empty Message' + '</p></div>';
        // chatTwo.innerHTML += '<div class="d-flex justify-content-start"><p>' + 'Empty Message' + '<small class="mx-2">' + time + '</small>' + '</p></div>';
        document.getElementById('chat-one-empty').classList.add('warning-show')
        document.getElementById('chat-'+ senderId +'-empty').classList.remove('warning-hide')

    }
    else {
        chatOne.innerHTML += '<div class="d-flex justify-content-end"><p class="bg-secondary text-white">' + '<small class="mx-2">' + time + '</small>' + inputOne + '</p></div>';
        chatTwo.innerHTML += '<div class="d-flex justify-content-start"><p>' + inputOne + '<small class="mx-2">' + time + '</small>' + '</p></div>';
        document.getElementById('input-'+senderId).value = '';
        document.getElementById('chat-one-empty').classList.remove('warning-show')
        document.getElementById('chat-'+ senderId +'-empty').classList.add('warning-hide')
    }

    // SET STATUS ONLINE
    userTwoStatus.innerHTML = 'Online';
}