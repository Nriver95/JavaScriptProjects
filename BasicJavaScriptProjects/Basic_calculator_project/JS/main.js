//Creates an object to keep track of values.
const calculator={
    //this will display 0 on the calculator screen.
    displayValue: '0',
    //this will hold the first operand for any expressionsm, set it to null for now.
    firstOperand: null,
    //this checks whether or not the second operand has been inputed by the user.
    waitSecondOperand: false,
    //this will hold the operator
    operator: null,
};

//This modifies values each time a button is clicked on.
function inputDigit(digit){
    const{displayValue, waitSecondOperand}=calculator;
    //this checks if the waitSecondOperand is true and sets displayValue to the key that was clicked on.
    if(waitSecondOperand === true){
        calculator.displayValue=digit;
        calculator.waitSecondOperand=false;
    } else {
        //This overwrites displayValue if the current value is 0 otherwise it adds onto it.
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

//This section handles decimal points.
function inputDecimal(dot){
    //This ensures that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if(calculator.waitSecondOperand === true) return;
    if(!calculator.displayValue.includes(dot)){
        //we are saying that if the displayvalue does not contain a decimal point we want to add a decimal point.
        calculator.displayValue += dot;
    }
}

//This section handles operators
function handleOperator(nextOperator){
    const{firstOperand, displayValue, operator} = calculator;
    //when an operator key is pressed we convert the current number displayed on the screen to a number and then store the result in calculator.firstOperand if it doesn't already exist.
    const valueOfInput = parseFloat(displayValue);
    //checks if an operator already exists and if waitSecondOperand is true, then updates the operator and exits from the function.
    if(operator && calculator.waitSecondOperand){
        calculator.operator = nextOperator;
        return;
    }
    if(firstOperand == null){
        calculator.firstOperand = valueOfInput;
    } else if (operator){//checks if an operator already exists
        const valueNow = firstOperand || 0;
        //If operator exists, property lookup is performed for the operator in the performCalculation object and the function that matches the operator is executed.
        let result = performCalculation[operator](valueNow, valueOfInput);
        //here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result*1).toString();
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};
function calculatorReset(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}
//this function updates the calculator screen with the contents of displayValue
function updateDisplay(){
    //makes use of the calculatorScreen class to target the input tag in the HTML doc.
    const display = document.querySelector('.calculatorScreen');
    display.value = calculator.displayValue;
}

updateDisplay();
//this section monitors button clicks
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) =>{
    //the target variable is an object that represents the element that was clicked.
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    //ensures that ac clears all inputs from the calculator screen.
    if (target.classList.contains('allClear')){
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})
