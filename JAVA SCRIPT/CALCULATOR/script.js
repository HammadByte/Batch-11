let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys button');

let calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operator: null,
    isDecimal: false,

    init() {
        keys.forEach(key => {
            key.addEventListener('click', event => {
                this.handleKeyClick(event.target);
            });
        });
    },

    handleKeyClick(key) {
        switch (key.id) {
            case 'clear':
                this.clear();
                break;
            case 'equals':
                this.calculate();
                break;
            default:
                this.appendKey(key.id);
        }
    },

    appendKey(key) {
        if (this.displayValue === '0') {
            this.displayValue = key;
        } else {
            this.displayValue += key;
        }

        display.value = this.displayValue;
    },

    clear() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.isDecimal = false;
        display.value = this.displayValue;
    },

    calculate() {
        if (this.operator) {
            this.secondOperand = parseFloat(this.displayValue);
            let result = 0;

            switch (this.operator) {
                case '+':
                    result = this.firstOperand + this.secondOperand;
                    break;
                case '-':
                    result = this.firstOperand - this.secondOperand;
                    break;
                case '*':
                    result = this.firstOperand * this.secondOperand;
                    break;
                case '/':
                    result = this.firstOperand / this.secondOperand;
                    break;
            }

            this.displayValue = result.toString();
            this.firstOperand = null;
            this.secondOperand = null;
            this.operator = null;
            display.value = this.displayValue;
        }
    }
};

calculator.init();