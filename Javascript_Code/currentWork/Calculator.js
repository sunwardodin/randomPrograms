/*
const prompt = require('prompt-sync')();

function calculator(val1, val2, operator) {
    let answer;
    switch(operator) {
        case "*":
            answer = val1 * val2;
            break;
        case "/":
            answer = val1 / val2;
            break;
        case "+":
            answer = val1 + val2;
            break;
        case "-":
            answer = val1 - val2;
          break;
        default:
          answer = 0;
      }
      return answer;
}
function numGet(){
    let num1 = parseFloat(prompt("What is the first number: "));
    let num2 = parseFloat(prompt("What is the second number: "));
    let op = prompt("What is the operator you would like to use: ")
    return num1 + " " + op + " " + num2 + " = " + calculator(num1, num2, op)
}

console.log(numGet())
*/

// Better Calculator
const prompt = require('prompt-sync')();
const Parser = require('expr-eval').Parser;
const parser = new Parser();

var formula = prompt("What do you want to calculate? ")//"2*x^3+3*x+6";
var expression = parser.parse(formula);
var result = expression.evaluate();
console.log(result.toFixed(2))

