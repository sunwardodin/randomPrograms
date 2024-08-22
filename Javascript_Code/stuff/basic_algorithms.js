function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) +32;
    return fahrenheit;
}

convertCtoF(30);


function reverseString(str) {
    let reversedStr = ""
    for (let i = str.length - 1;i >= 0; i--){
      reversedStr += str[i]
    }
    return reversedStr;
}
  reverseString("hello");


function factorialize(num) {
    let product = 1;
    for (let i = 1; i <= num; i++){
      product *= i;
    }
    return product
}
factorialize(5);


function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
    return results;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
    let newStr = ""
    for (let i=0; i<num; i++){
      newStr += str
    }
    return newStr;
}
repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
    if (str.length > num){
      let newStr = str.slice(0, num) + "..."
      return newStr
    } else {
      return str
    }
    /*
    A better solution:
    let newStr = ""
    return str.length > num ? newStr = str.slice(0, num) + "..." : str
    */
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
    let num = 0;
    for (let i=0; i < arr.length; i++){
      num = arr[i]
      if (func(num)){
        return num
      }
    }
    return undefined
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


function booWho(bool) {
    return typeof bool === 'boolean'
}
booWho(null);


function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase(); // because strings are considered arrays in js, you can also treat it like a sub array.
    }
    return updatedTitle.join(" ");
}
titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


function bouncer(arr) {
    return arr.filter(Boolean); // somehow this will remove all of the false values from an array.
}
bouncer([7, "ate", "", false, 9]);


function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length; // Honestly not sure what this does
}
getIndexToIns([40, 60], 50);


function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
mutation(["hello", "hey"]);


function chunkArrayInGroups(arr, size) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);