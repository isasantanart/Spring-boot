let currentInput = '0';
let currentOperation = null;
let num1 = null;

function press(value) {
    if (currentInput === '0') {
        currentInput = value.toString();
    } else {
        currentInput += value.toString();
    }
    updateDisplay();
}

function setOperation(operation) {
    if (num1 === null) {
        num1 = parseFloat(currentInput);
        currentInput = '0';
        currentOperation = operation;
    }
}

function calculate() {
    if (currentOperation && num1 !== null) {
        let num2 = parseFloat(currentInput);
        let result = null;

        fetch(`http://localhost:8080/${currentOperation}?a=${num1}&b=${num2}`)
            .then(response => response.json())
            .then(data => {
                currentInput = data.result.toString();
                updateDisplay();
                num1 = null;
                currentOperation = null;
            })
            .catch(error => {
                currentInput = 'Erro';
                updateDisplay();
            });
    }
}

function clearDisplay() {
    currentInput = '0';
    num1 = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}