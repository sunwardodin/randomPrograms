const prompt = require('prompt-sync')();

function diceRoll(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}
function tenDiceRoll(){
    let sum = 0;
    for (let i = 0; i <= 10; i++){
        sum += diceRoll()
    }
    return "The sum of all the 10 dices rolls I just freaking did is: " + sum + "\nYa welcome!"
}
function compute(num){
    let arr = []
    for (let i = num; i >= 0; i--){
        arr.unshift(i)
    }
    return arr
}
function ask(){
    let roll = prompt("Do you want to roll the dice? ")
    if (roll == "Yes"){
        return "The number we have given thou is " + diceRoll()
    } else if (roll == "Cheese sandwich") {
        return "I see that thou hast chosen the Cheese sandwich. Thou shalt receive 10,000 Pence."
    } else if (roll == "Loop"){
        return tenDiceRoll()
    } else if (roll == "no"){
        let property = prompt("What number do you want to compute? ")
        return compute(property)
    } else {
        return "Get the crap outta here!!!!!"
    }
}


console.log(ask())