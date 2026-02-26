var currentInput = "";
var operator = "";
var firstNumber = null;
var display = document.getElementById("display");
function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}
function setOperator(op) {
    firstNumber = parseFloat(currentInput);
    operator = op;
    currentInput = "";
}
function calculate() {
    var secondNumber = parseFloat(currentInput);
    var result = 0;
    if (firstNumber !== null) {
        switch (operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
        }
    }
    display.value = result.toString();
    currentInput = result.toString();
}
function clearDisplay() {
    currentInput = "";
    operator = "";
    firstNumber = null;
    display.value = "";
}
window.appendNumber = appendNumber;
window.setOperator = setOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
