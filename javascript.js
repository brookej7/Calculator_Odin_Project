let NUM1;
let NUM2;
let OPERATOR;
let DISPLAY_VAL = "0";
let NEW_NUM = true;

function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {
    
    return num1 - num2;

}

function divide(num1, num2) {

    if (num2 == 0) {

        NUM1 = null;
        NUM2 = null;
        OPERATOR = null;
        NEW_NUM = true;

        return 'you tried and failed';

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

    let stringResult = result.toString()

    if (stringResult.length > 9) {

        if(result > 999999999) {
            return "+999999999"
        }
        
        result = stringResult.substr(0, 8) + Math.round(parseInt(stringResult[9])).toString();
        return result;

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

    if (currDisplay.length >= 9) {
        return currDisplay;
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

                if (DISPLAY_VAL == "+99999999") {
                    DISPLAY_VAL = "999999999";
                }
                NUM2 = parseFloat(DISPLAY_VAL);
                DISPLAY_VAL = operate(NUM1, NUM2, OPERATOR);
                display(DISPLAY_VAL)
                NUM1 = null;
                NUM2 = null;
                OPERATOR = null;
                NEW_NUM = true;
                opButtons = document.querySelectorAll(".operators");
                opButtons.forEach((opBut) => {
                            
                    let newStyle= `opacity:1`;
                    opBut.setAttribute("style", newStyle);
                })

            }
            

        } else if (button.id == "clear"){
            
            NUM1 = null;
            NUM2 = null;
            OPERATOR = null;
            NEW_NUM = true;
            DISPLAY_VAL = 0
            display(DISPLAY_VAL);
            opButtons = document.querySelectorAll(".operators");
            opButtons.forEach((opBut) => {
                        
                let newStyle= `opacity:1`;
                opBut.setAttribute("style", newStyle);
            })

        } else if (button.id == "backspace") {

            if (DISPLAY_VAL.length == 1) {
                DISPLAY_VAL = "0";
                NEW_NUM = true;
            } else {
                DISPLAY_VAL = DISPLAY_VAL.slice(0, DISPLAY_VAL.length - 1);
            }
            display(DISPLAY_VAL);

        } else if (button.parentNode.querySelector(".operators") != null) {

            if (OPERATOR != null) {

                if (DISPLAY_VAL == "+99999999") {
                    DISPLAY_VAL = "999999999";
                }
                NUM2 = parseFloat(DISPLAY_VAL);
                DISPLAY_VAL = operate(NUM1, NUM2, OPERATOR);
                display(DISPLAY_VAL)

            }


            
            OPERATOR = button.textContent;
            let newStyle= `opacity:0.5`;
            button.setAttribute("style", newStyle);
            if (DISPLAY_VAL == "+99999999") {
                DISPLAY_VAL = "999999999";
            }
            NUM1 = parseFloat(DISPLAY_VAL);
            NEW_NUM = true;

        } else {
            
            if (button.id == "dec") {
                if (DISPLAY_VAL.includes('.')) {
                    return;
                } else if (DISPLAY_VAL == "0") {
                    NEW_NUM = false;
                }
            }
            let nextNumber = button.textContent;
            DISPLAY_VAL = updateNumber(DISPLAY_VAL, nextNumber);
            display(DISPLAY_VAL);

        }
    });
});