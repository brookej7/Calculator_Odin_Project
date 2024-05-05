let NUM1;
let NUM2;
let OPERATOR;
let DISPLAY_VAL;

function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {
    
    return num1 - num2;

}

function divide(num1, num2) {

    if (num2 == 0) {

        return 'error'

    }

    return num1 / num2;

}

function multiply(num1, num2) {

    return num1 * num2;

}

function operate(num1, num2, operator) {

    let result;

    switch(operator) {
        case '+':
            result = add(num1, num2);
            break

        case '-':
            result = subtract(num1, num2);
            break

        case '/':
            result = divide(num1, num2);
            break

        case '*':
            result = multiply(num1, num2);
            break
    }

    return result

}

function display_num(toDisplay) {

    let screen = document.querySelector("#screen");
    let currDisplay = screen.textContent.trim()
    if (currDisplay== "0") {
        
        screen.textContent = toDisplay;
        return toDisplay;

    } else if (toDisplay == null) {

        screen.textContent = 0;
        return toDisplay;

    }

    toDisplay = screen.textContent.concat(toDisplay);
    screen.textContent = toDisplay;

    return toDisplay;


}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if(button.id == "equal") {

            DISPLAY_VAL = operate(NUM1, NUM2, OPERATOR);
            display_num(DISPLAY_VAL)

        } else if (button.id == "clear"){
            
            NUM1 = null;
            NUM2 = null;
            OPERATOR = null;
            DISPLAY_VAL = display_num(null);

        } else if (button.parentNode.parentNode.querySelector(".operators") != null) {

            OPERATOR = button.textContent;

        } else {
            
            let nextNumber = button.textContent;
            DISPLAY_VAL = display_num(nextNumber);

        }
    });
});