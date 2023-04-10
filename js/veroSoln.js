let display = document.querySelector('#input')
let buttons = document.querySelector('.buttons')

let inputValue1 = 0;
let inputValue2 = 0;
let operation = "";
let currentInput = "";

buttons.addEventListener('click', (e) => {
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        inputValue1 = display.textContent.slice(0, display.textContent.length - 1)
    }
    else if (currentInput = "=") {
        inputValue2 = display.textContent.slice(inputValue1.length + 1, display.textContent.length)
        operation = display.textContent[inputValue1.length]
    }
    else if (currentInput = "C") {
        display.textContent = "";
        inputValue1 = 0;
        inputValue2 = 0;
    }
})

const calculate = (val1, val2, operator) => {
    switch(operator) {
        case "+":
            
    }
}