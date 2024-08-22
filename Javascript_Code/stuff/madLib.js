const prompt = require('prompt-sync')();
function libStuff(){
    let libArr = ["The quick brown ", 
                    "", 
                    " Jumped over the ", 
                    "", 
                    ". It went through the ", 
                    ""]
    for (let i=1; i<=libArr.length; i+=2){
        let answer = prompt("Choose a word: ")
        libArr[i] = answer
    }
    return str(libArr)
}
console.log(libStuff())