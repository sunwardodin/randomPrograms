let arr = []
arr.unshift(1, 2)
arr.push("the", "world")

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

const arr2 = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4)
// Only change code above this line
console.log(arr);

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

function forecast(arr) {
    let newArr = arr.slice(2, 4)
    return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) { // The spread operator ... copies an entire array
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}  
console.log(spreadOut());

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false
}
  
const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
console.log(foods);

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
function checkInventory(scannedItem) {
    return foods[scannedItem] // This accesses the value of the selected item
}
console.log(checkInventory("apples"));

let food1s = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};  
delete foods.oranges 
delete foods.plums 
delete foods.strawberries
console.log(foods);

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");  // Only change code above this line
}
console.log(isEveryoneHere(users));

const user1s = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online == true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(user1s));

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(user1s));

let puser = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(puser, 'Pete'));