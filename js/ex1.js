var num1= window.prompt("Enter your fist number:");
var num2= window.prompt("Enter your second number:");
var math_op= window.prompt("Enter Mathematical Operation (+, -, *, /):");

//num1 = parseFloat(num1);
//num2 = parseFloat(num2);

function calculate(num1, math_op, num2) {
    let result;
    switch (math_op) {
        case "+":
            result= num1 + num2;
            break; 
        case "-":
            result= num1 - num2;
            break;
        case "*":
            result= num1 * num2;
            break;
        case "/":
            result= num1 / num2;
            break;
    }
    return result;
};
console.log(calculate(result));