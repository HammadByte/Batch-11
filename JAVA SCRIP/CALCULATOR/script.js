var display = document.getElementById('display');
var keys = document.querySelectorAll('.keys button');

var calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        var keyValue = e.target.textContent;

        if (keyValue === 'C') {
            calculator.displayValue = '0';
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = null;
        } else if (keyValue === '=') {
            calculator.secondOperand = parseFloat(calculator.displayValue);
            var result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
            calculator.displayValue = result.toString();
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = null;
        } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
            calculator.firstOperand = parseFloat(calculator.displayValue);
            calculator.operator = keyValue;
            calculator.displayValue = '0';
        } else {
            if (calculator.displayValue === '0') {
                calculator.displayValue = keyValue;
            } else {
                calculator.displayValue += keyValue;
            }
        }

        display.value = calculator.displayValue;
    });
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 0;
    }
}