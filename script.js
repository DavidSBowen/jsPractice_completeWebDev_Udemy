var userList = [{
    username: "David",
    password: "pass123"
},
{
    username: "Thomas",
    password: "password"
},
{
    username: "Beth",
    password: "password1"
}];

var newsfeed = [
    {
        friend: "Bob",
        timeline: "Living the life"
    },
    {
        friend: "Willy",
        timeline: "I'm bored out of my frickin mind man"
    },
    {
        friend: "Yessica",
        timeline: "Yasssss I like to partaay"
    }
];

var usernamePrompt = prompt("Enter your username:");
var passwordPrompt = prompt("Enter your password:");

var signInReturn = validateUser(usernamePrompt, passwordPrompt)
console.log(`sign in return: ${signInReturn}`);

if (signInReturn !== false) {
    runPopulateTimeline(signInReturn);
} else {
    alert("Username password combination not found.");
}

function runPopulateTimeline(user) {
    displayWelcome(user);
    newsfeed.forEach(element => {
        populateTimeline(element);
    });
}

function displayWelcome(user) {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let welcomeText = document.createTextNode(`Welcome ${user}`);
    h1.appendChild(welcomeText);
    div.appendChild(h1);
    body.appendChild(div);
}

function validateUser(user, pass) {
    let returnValueHolder = false;
    console.log(`validateUser: ${user}, ${pass}`);
    userList.forEach((i) => {
        console.log(`validateUser: ${i.username}, ${i.password}`);
        if (user === i.username && pass === i.password) {
            console.log(`user: ${user}`);
            returnValueHolder = user;
        }
    });
    return returnValueHolder;
}

function populateTimeline(f) {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.setAttribute('class','divClass');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    let h1Text = document.createTextNode(f.friend);
    let pText = document.createTextNode(f.timeline);

    h3.appendChild(h1Text);
    p.appendChild(pText);
    div.appendChild(h3);
    div.appendChild(p);
    body.appendChild(div);
}