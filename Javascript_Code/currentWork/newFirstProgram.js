//console.log("Hello World")
/*
let sum = 5+8;
let Fred = "Name";
//console.log(sum)
if (sum == 13){
    console.log("Good")
} else {
    console.log("PooP")
}

if(Fred == "Nab"){
    console.log("shirtland")
} else if(Fred == "Name"){
    console.log("Biscoff")
} else {
    console.log(10)
}
*/

function calculate(num1, num2){
    let sum = (num1 + num2);

    if (sum >= 10){
        return "Good enough for government work"
    } else if (sum <= 8) {
        return "This guy stinks"
    } else {
        return "straight poop"
    }
}

console.log(calculate(5, 4))