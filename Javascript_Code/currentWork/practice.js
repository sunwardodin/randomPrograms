/*
let originalText = "Geeks for Geeks Portal";
let removedSpacesText = originalText
    .split(" ")
    .join("");
console.log(removedSpacesText);
*/

function convertToRoman(num) {
    let romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD:	400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = ""
    for (let prop in romanNumerals){
        while(num >= romanNumerals[prop]){
            result += prop
            num -= romanNumerals[prop]
            console.log(result)
        }
    }

    return result
}
   
//convertToRoman(10);



function rot13(str) {
    let decoder = {
      N: A,
      O: B,
      P: C,
      Q: D,
      R: E,
      S: F,
      T: G,
      U: H,
      V: I,
      W: J,
      X: K,
      Y: L,
      Z: M,
      A: N,
      B: O,
      C: P,
      D: Q,
      E: R,
      F: S,
      G: T,
      H: U,
      I: V,
      J: W,
      K: X,
      L: Y,
      M: Z
    }
    let newStr = ""
    for (let i=0; i < str.length; i++){
      str[i].replace(decoder)
    }
    return newStr;
}
rot13("SERR PBQR PNZC");



function rot12(str) {
    let answer = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    for(let i = 0; i < str.length; i++){
        if(alphabet. indexOf(str[i]) >= 13){ 
            answer += alphabet[alphabet.indexOf(str[i]) - 13];
        } else if(alphabet. indexOf(str[i]) < 13 && alphabet. indexOf(str[i]) > -1){
            answer += alphabet[alphabet.indexOf(str[i]) + 13]; 
        } else { 
            answer += str[i];
        }
      }
      return answer;
}
rot12("SERR PBQR PNZC");



function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;
    return regex.test(str)
}
console.log(telephoneCheck("555-555-5555"))






function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0
    for (let elem of cid){
        cidTotal += elem[1] * 100;
    }
    if (change > cidTotal){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (change === cidTotal){
        return {status: "CLOSED", change: cid}
    } else {
        let result = []
        cid = cid.reverse()
        let currencyUnit = {
            "ONE HUNDRED": 10000,
            "TWENTY": 2000,
            "TEN": 1000,
            "FIVE": 500,
            "ONE": 100,
            "QUARTER": 25,
            "DIME": 10,
            "NICKEL": 5,
            "PENNY": 1
        }
        for ( let elem of cid){
            let moneyHolder = [elem[0], 0];
            elem[1] = elem[1] * 100
            while(change >= currencyUnit[elem[0]] && elem[1] > 0){
                change -= currencyUnit[elem[0]]
                elem[1] -= currencyUnit[elem[0]]
                moneyHolder[1] += currencyUnit[elem[0]] / 100;
            }
            if(moneyHolder[1] > 0){
                result.push(moneyHolder)
            }
        }
        if(change > 0){
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        return {status: "OPEN", change: result}
    }
}  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));