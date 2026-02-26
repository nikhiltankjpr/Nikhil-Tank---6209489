let currentInput: string = "";
let operator: string = "";
let firstNumber: number | null = null;

const display = document.getElementById("display") as HTMLInputElement;

function appendNumber(num: string): void {
    currentInput += num;
    display.value = currentInput;
}

function setOperator(op: string): void {
    firstNumber = parseFloat(currentInput);
    operator = op;
    currentInput = "";
}

function calculate(): void {
    const secondNumber = parseFloat(currentInput);
    let result: number = 0;

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

function clearDisplay(): void {
    currentInput = "";
    operator = "";
    firstNumber = null;
    display.value = "";
}

(window as any).appendNumber = appendNumber;
(window as any).setOperator = setOperator;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;