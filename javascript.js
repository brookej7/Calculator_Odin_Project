let NUM1;
let NUM2;
let OPERATOR;
let DISPLAY_VAL = 0;
let SWAP_NUM = false;

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
    
    if (currDisplay == "0") {

        return currNum;

    } else if (currNum == null) {

        return 0;

    } else {

        if (NUM1 != null & SWAP_NUM == false) {

            SWAP_NUM = true;
            return currNum;

        }

        return currDisplay.concat(currNum);

    }

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
                SWAP_NUM = false;

            }
            

        } else if (button.id == "clear"){
            
            NUM1 = null;
            NUM2 = null;
            OPERATOR = null;
            SWAP_NUM = false;
            DISPLAY_VAL = 0
            display(DISPLAY_VAL);

        } else if (button.parentNode.parentNode.querySelector(".operators") != null) {
            
            OPERATOR = button.textContent;
            NUM1 = parseFloat(DISPLAY_VAL);
            console.log(OPERATOR);

        } else {
            
            let nextNumber = button.textContent;
            DISPLAY_VAL = updateNumber(DISPLAY_VAL, nextNumber);
            display(DISPLAY_VAL);

        }
    });
});