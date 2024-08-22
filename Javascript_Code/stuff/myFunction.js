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
    result = names[val];
    return result;
  }
  console.log(phoneticLookup("charlie"));

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);

function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let i = 1, ii = i*i;

  while (ii <= numDoors) {
    doors.push(ii);
    i++; ii = i*i;
  }
  return doors;
}