//console.log("Hello World");
//console.log(1 + 2);
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
const myCatStr = "This is the start. " + "This is the end."; 
const myName = "Drew";
const myNameStr = "My name is " + myName + " I am well!";

let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
let firstLetterOfLastName = lastName[0];
const lastLetterOfLastName = lastName[lastName.length - 1];
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
//console.log(lastNameLength, firstLetterOfLastName, lastLetterOfLastName);


const myArray = ["PB&J", 12, 34, 45];
const myNestedArray = [[23, "Balls"], [45, "Bullpins"]]; //This is a nested array or a multi-dimensional array
let myData = myArray[0];
myArray[0] = 45;
myArray.push(["dog", 3]); // This function adds an element to the back of an array
let removedFromMyArray = myArray.pop(); //This function removes the last piece of an array
let removeShiftFromMyArray = myArray.shift(); //This function removes the first piece of an array
myArray.unshift(["Paul", 35]); // This function adds an element to the beginning of an array
//console.log(myArray);
//console.log(myNestedArray[1]);

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myNestedData = myArray[2][1];
//console.log(myData);


function reusableFunction() {
    let myString = "Hi World";
    //console.log(myString);
}
function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}
function timesFive(arg1) {
    return arg1 * 5;
}

let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
// the local variable takes precedence over the global variable.

//console.log(timesFive(6));
//functionWithArgs(10, 12);


let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);


function nextInLine(arr, item) {
    arr.push(item);
    let removeShiftFromMyArray = arr.shift();
    return removeShiftFromMyArray;
}
let testArr = [5, 6, 7, 8, 9];
//console.log("Before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 1));
//console.log("After: " + JSON.stringify(testArr));



// === This is the strict operator ex. 3 === '3' will return false because they are different types. !== This is strict not equal. 


function switchOfStuff(val) {
    let answer = "";
    switch(val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
    return answer;
}
switchOfStuff(1);


function chainToSwitch(val) {
    let answer = "";
    switch(val){ 
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;
}
chainToSwitch(7);


let count = 0;

function cc(card) {
  let answer = '';
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }
  if (count < 1) answer = ' Hold';
  else answer = ' Bet';
  return count + answer;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// This is an object in JS
const myDog = {
  "name": "Dingo",
  "legs": 4,
  "tails": 2,
  "friends": ["Charlie", "Sheen"]
};
myDog["name"] = "Skippy"; // This is how you update objects
myDog.bark = "woof"; // This is how you add properties to an object
delete myDog.tails; // This is how you delete properties

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// This is how you access the values of an object
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

const testMeal = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// For object values with spaces in the name, you need to use bracket notation to access the value
const entreeValue = testMeal["an entree"];
const drinkValue = testMeal['the drink'];

const testPlayer = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  // Change this line
const player = testPlayer[playerNumber];   // Change this line
//console.log(player);

function phoneticLookup(val) {
  let result = "";
  const  names = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = names[val]; // you can use objects for lookup
  return result;
}
phoneticLookup("charlie");

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){ // You can check if an object has a property this way
    return obj[checkProp];
  }
  else return "Not Found";
  // Only change code above this line
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Jilly Boel",
    "title": "Miano Pan",
    "release_year": 1974,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"]; // This is assigning gloveBoxContents to "maps"

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1]; // this is assigning secondTree to "pine"

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === ""){
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== ""){
    if (records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');


const poopyArray = [];
let i = 0;
while (i < 6){
  poopyArray.push(i);
  i++;
}
//console.log(poopyArray[2]);
for (let i = 1; i < 6; i++) {
  poopyArray.push(i);
}

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

do {
  myArray.push(i);
  i++;
} while (i < 5)


const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name){
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");


function randomFraction() {
  return Math.random();
}

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
}
checkEqual(1, 2);

function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
}
checkSign(10);

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(6));

function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    const arrae = [];
    arrae.push(endNum);
    return arrae;
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

console.log(rangeOfNumbers(4, 10));


function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value;

const dum = (...args) => {
  //const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today, tomorrow } = HIGH_TEMPERATURES;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//console.log(highToday);


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
const { today: {low: lowToday, high: highTorday}} = LOCAL_FORECAST;

/*
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
*/


function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source); // returns 1 and 2


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ min, max }) => (max + min) / 2.0 // returns 28.015


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++){ // The .length method is the length of the array
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure); // Returns: ['<li class="text-warning">no-var</li>', '<li class="text-warning">var-on-top</li>', '<li class="text-warning">linebreak</li>']  // each on their own separate line


const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
}; // ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.


const bicycle = {
  gear: 2,
  setGear(newGear) { // This is defining a function in the object
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);


class Vegetable {
  constructor(name){
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


class Thermostat {
  constructor(fah) {
    this._fah = fah;
  }

  get temperature(){
    return (5/9) * (this._fah - 32);
  }
  set temperature(celsius){
    return this._fah = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


//A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.
/*
<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
*/

const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString }; // export work

import { uppercaseString, lowercaseString }  from './string_functions.js' // import work

uppercaseString("hello");
lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js"; // import all of the contents of a file from the same directory

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

export default function subtract(x, y) { // Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
  return x - y;
}

import subtract from "./math_functions.js"; // this imports the above code

subtract(7,4);



const makeServerRequest1 = new Promise((resolve, reject) => {

})
/*
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, 
usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. 
Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise. The syntax looks like this^
*/
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});


const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});