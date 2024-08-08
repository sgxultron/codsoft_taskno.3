let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
    display.classList.add('number-display'); // add the number-display class for numbers
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = op;
        currentInput = '';
        display.innerText = operator;
        display.classList.remove('number-display'); // remove the number-display class for operators
    } else if (operator) {
        calculate();
        operator = op;
        display.classList.remove('number-display'); // remove the number-display class for operators
    }
}

function calculate() {
    let secondOperand = currentInput;
    if (firstOperand === '' || secondOperand === '' || operator === '') return;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    display.innerText = result;
    firstOperand = result;
    currentInput = '';
    operator = '';
    display.classList.add('number-display'); // Add the number-display class for the result
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    display.innerText = '';
    display.classList.remove('number-display'); // remove the number-display class for clearing
}
