let NUM1;
let NUM2;
let OPERATOR;
let DISPLAY_VAL = 0;
let NEW_NUM = true;

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

        case 'x':
            result = multiply(num1, num2);
            break
    }

    return result.toString()

}

function display(toDisplay) {

    let screen = document.querySelector("#screen");
    screen.textContent = toDisplay;

}

function updateNumber(currDisplay, currNum) {

    if (NEW_NUM) {
        
        NEW_NUM = false;
        return currNum;

    }
    
    return currDisplay.concat(currNum);
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if(button.id == "equal") {
            
            if (NUM1 == null & NUM2 == null & OPERATOR == null) {

                ;

            } else {

                NUM2 = parseFloat(DISPLAY_VAL);
                DISPLAY_VAL = operate(NUM1, NUM2, OPERATOR);
                display(DISPLAY_VAL)
                NUM1 = null;
                NUM2 = null;
                OPERATOR = null;
                NEW_NUM = true;

            }
            

        } else if (button.id == "clear"){
            
            NUM1 = null;
            NUM2 = null;
            OPERATOR = null;
            NEW_NUM = true;
            DISPLAY_VAL = 0
            display(DISPLAY_VAL);

        } else if (button.parentNode.parentNode.querySelector(".operators") != null) {

            if (OPERATOR != null) {

                NUM2 = parseFloat(DISPLAY_VAL);
                DISPLAY_VAL = operate(NUM1, NUM2, OPERATOR);
                display(DISPLAY_VAL)

            }
            
            OPERATOR = button.textContent;
            NUM1 = parseFloat(DISPLAY_VAL);
            NEW_NUM = true;

        } else {
            
            let nextNumber = button.textContent;
            DISPLAY_VAL = updateNumber(DISPLAY_VAL, nextNumber);
            display(DISPLAY_VAL);

        }
    });
});