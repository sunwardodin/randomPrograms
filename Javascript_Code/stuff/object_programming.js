let dog = {
    name: "Poop",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs."}
};
console.log(dog.name, dog.numLegs)
dog.sayLegs();

function Dog(){
    this.name = "",
    this.color = "",
    this.numLegs = 4
}
let hound = new Dog()


function Mog(name, color) {
    this.name = name,
    this.color = color,
    this.numLegs = 4
}
let terrier = new Mog("Gus", "puce")


function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(4)
myHouse instanceof House; // This would return true because myHouse is an instance on House()


function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary){ // The following code adds all of the own properties of canary to the array ownProps
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
}


function Smog(name) {
    this.name = name;
}
Smog.prototype.numLegs = 4 // this will add a property to Smog()
let beagle = new Smog("Snoopy");


let smeagle = new Dog("Snoopy");
let prototypeProps = [];
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}


function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}


Dog.prototype = {
  constructor: Dog, // Make sure to always set the constructor property
  numLegs: 4, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype.isPrototypeOf(beagle) // prototype is like the inherited genes from the parent. In this case the parent is the object. 

Object.prototype.isPrototypeOf(Dog.prototype); // Apparently prototypes themselves are objects


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype)
let Deagle = Object.create(Animal.prototype)


/*
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();
*/


/*
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();
*/


/*
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
  console.log("Woof!")
}

let beagle = new Dog();
*/


/*
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() { // You can override functions to change the output
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());
*/


/*
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){ // this is a mixin. you can attribute this function to object to give them the attributes of the function.
  obj.glide = function(){
    console.log("Gliding, wooosh!");
  }
}
glideMixin(bird)
glideMixin(boat)
*/


/*
function Bird() {
  let weight = 15;
  this.getWeight = function() { // this is that stupid private variables thing again. Recall codecademy and the stupid swift private vs public lessons. they sucked
    return weight;
  };
}
*/


(function () {
  console.log("A cozy nest is ready");
})(); // this is an anonymous function that is called right away



let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
// The two functions above become irrelevant due to the funModule below
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();


