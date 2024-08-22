function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
}
sumAll([1, 4]);

//--------------

function diffArray(arr1, arr2) {
    const newArr = [];
    function onlyInFirst(first, second) {
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //---------------

  function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  //----------------

  function whatIsInAName(collection, source) {
    const collectionMatches = [];
    for (let i = 0; i < collection.length; i++) {
      let foundMismatch = false;
  
      for (const sourceProp in source) {
        if (collection[i][sourceProp] !== source[sourceProp]) {
          foundMismatch = true;
        }
      }
      if (!foundMismatch) {
        collectionMatches.push(collection[i]);
      }
    }
    return collectionMatches;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//------------------

function spinalCase(str) {
    var regex = /\s+|_+/g;
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  console.log(spinalCase('This Is Spinal Tap'))

  //----------------

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
}
  
translatePigLatin("consonant");

//------------------

function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

  //------------------

  function pairElement(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
    return pairs;
  }
  pairElement("GCG");

  //--------------------

  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  fearNotLetter("abce");

  //---------------------

  function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
    return finalArray;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //-----------------------

  function convertHTML(str) {
    // Split by character to avoid problems.
    var temp = str.split("");
    // Since we are only checking for a few HTML elements, use a switch
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
    temp = temp.join("");
    return temp;
  }
  convertHTML("Dolce & Gabbana");

  //-----------------------

  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return result;
  }
  sumFibs(4);

  //----------------

  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  sumPrimes(10);

  //---------------

  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  smallestCommons([1,5]);

  //------------------

  function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  dropElements([1, 2, 3], function(n) {return n < 3; });

  //-----------------

  function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  steamrollArray([1, [2], [3, [[4]]]]);

  //-------------------

  function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    // we then simply join the string
    return uniString.join("");
  }
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

  //--------------------

  function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

  //---------------------

  function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }
  addTogether(2,3);

  //-------------------

  const Person = function(first, last) {
    let firstName = first;
    let lastName  = last;
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };
  
    this.setFirstName = function(first) {
      return firstName = first;
    };
  
    this.setLastName = function(last) {
      return lastName = last;
    };
  
    this.setFullName = function(first, last) {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  };
  const bob = new Person("Bob", "Ross");
  console.log(bob.getFullName());

  //--------------------

  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  //--------------------

  