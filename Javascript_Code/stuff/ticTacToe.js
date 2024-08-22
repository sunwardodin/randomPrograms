const prompt = require('prompt-sync')();

function playTTT(arr){
    console.log(playArray.join())
    let letter = prompt("What: ")
    let space = prompt("Where: ")

    if (letter == "x") {
        switch (space) {
            case "a1":
                arr[0] = letter
                break;
            case "a2":
                arr[1] = letter
                break;
            case "a3":
                arr[2] = letter
                break;
            case "b1":
                arr[3] = letter
                break;
            case "b2":
                arr[4] = letter
                break;
            case "b3":
                arr[5] = letter
                break;
            case "c1":
                arr[6] = letter
                break;
            case "c2":
                arr[7] = letter
                break;
            case "c3":
                arr[8] = letter
                break;
            default:
                return "Unknown error has occurred"
        }
    } else {
        switch (space) {
            case "a1":
                arr[0] = letter
                break;
            case "a2":
                arr[1] = letter
                break;
            case "a3":
                arr[2] = letter
                break;
            case "b1":
                arr[3] = letter
                break;
            case "b2":
                arr[4] = letter
                break;
            case "b3":
                arr[5] = letter
                break;
            case "c1":
                arr[6] = letter
                break;
            case "c2":
                arr[7] = letter
                break;
            case "c3":
                arr[8] = letter
                break;
            default:
                return "Unknown error has occurred"
        }
    }
    return playArray;
}

let playArray = ["-", "-", "-", "-", "-", "-", "-", "-", "-",];
console.log("What do you want to lay down? ")
//playTTT(playArray)

for (let i = 1; i <= 9; i++) {
    playTTT(playArray)
}

console.log("The result of the game is: ")
console.log(playArray)

/*
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let myNestedArray = [
    // Only change code below this line
    [['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, [true], 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push']],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]
    // Only change code above this line
  ]
  */