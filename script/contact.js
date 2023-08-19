console.log('Contact now')
//Get elements 
const username = document.querySelector('#username');
const emailName = document.querySelector('#email');
const expertise = document.querySelector('#expertise');
const comment = document.querySelector('#comment');
//Get elements to display message
const typeDiv = document.querySelector('#type');
const mssg = document.querySelector('#msg');

//Send a message
const sendMessage = (type, message) => {
    mssg.textContent = message;
    mssg.setAttribute('class', type);
}

var contacts = [];
window.onload = function () {
    if (localStorage.contacts) {
        contacts = JSON.parse(localStorage.contacts)
    }
    console.log('Contact getd')
}

document.querySelector('#submit').addEventListener('click', function (e) {
    e.preventDefault();
    //The Object

const user = {
    userName: username.value.trim(),
    email: emailName.value.trim(),
    expertiseDomain: expertise.value.trim(),
    message: comment.value.trim()
    }
    

if (user.userName === "") {
    sendMessage('Error', 'You need to import a name');
} else if (user.email === "") {
    sendMessage('Error', 'You need an email');
} else if (user.expertiseDomain) {
    sendMessage('Error', 'Select a postion');
} else if (user.message === "") {
    sendMessage('Error', 'Send a message please');
} else {
    sendMessage('Successful',"We have received your message correctly")
    }
    //Check how many times a user has used your page
    var counter = localStorage.getItem("count") || 0;
    counter++;
    
    contacts.push(user);
    // localStorage.contacts = JSON.stringify(contacts)
    localStorage.setItem("Contacts",JSON.stringify(contacts))
    const getContacts = JSON.parse(localStorage.getItem("Contacts"));
    
    console.log(getContacts)

// localStorage.setItem("count", counter);
//     //set in localstorage
//     // localStorage.setItem('user', JSON.stringify(user));
//     const stringedUser = JSON.stringify(user)
//     localStorage.setItem("USERS", stringedUser);
//     //Clear all fields on submit
    username.value = "";
    emailName.value = "";
    expertise.value = "";
    comment.value = "";
    
},false)