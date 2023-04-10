const body = document.querySelector('body')
const numButtons = document.querySelectorAll('div.numButton')
const opButtons = document.querySelectorAll('div.operators')
const displayInput = document.querySelector('#userInput')
const clear = document.querySelector('#c')
let userInput = [];
let answer = document.querySelector('#result')

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function (e) {
        userInput.push(e.target.id);
        displayInput.textContent = userInput.join("");
    })
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', function (e) {
        userInput.push(e.target.id);
        displayInput.textContent = userInput.join("");
        opButtons.disabled = true;
    })
}

clear.addEventListener('click', function (e) {
    e.stopPropagation();
    userInput = [];
    displayInput.textContent = "";
})

answer.addEventListener('click', function (e) {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput.includes('+')) {
            let before = userInput.slice(0, userInput.indexOf('+'));
            beforeJoined = Number(before.join(""))
            let after = userInput.slice(userInput.indexOf('+') + 1);
            afterJoined = Number(after.join(""));
            displayInput.textContent = `${beforeJoined + afterJoined}`
        }
        else if (userInput.includes('-')) {
            let before = userInput.slice(0, userInput.indexOf('-'));
            beforeJoined = Number(before.join(""))
            let after = userInput.slice(userInput.indexOf('-') + 1);
            afterJoined = Number(after.join(""));
            displayInput.textContent = `${beforeJoined - afterJoined}`
        }
        else if (userInput.includes('*')) {
            let before = userInput.slice(0, userInput.indexOf('*'));
            beforeJoined = Number(before.join(""))
            let after = userInput.slice(userInput.indexOf('*') + 1);
            afterJoined = Number(after.join(""));
            displayInput.textContent = `${beforeJoined * afterJoined}`
        }
        else {
            let before = userInput.slice(0, userInput.indexOf('/'));
            beforeJoined = Number(before.join(""))
            let after = userInput.slice(userInput.indexOf('/') + 1);
            afterJoined = Number(after.join(""));
            displayInput.textContent = `${beforeJoined / afterJoined}`
        }
    }
})




