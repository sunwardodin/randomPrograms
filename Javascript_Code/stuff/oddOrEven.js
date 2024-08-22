const prompt = require('prompt-sync')();
function oddEven(num){
    if (num % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}

let userNum = prompt("What is the number thou wishes to decide? ")
console.log(oddEven(userNum))