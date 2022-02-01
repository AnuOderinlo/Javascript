'use strict';
/*
//This is a constructor function
const Person = function (firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;

};

// console.log(Person.prototype);

//Creating method in the Person constructor function
Person.prototype.calcAge = function () {
    return 2022 - this.birthYear;
}

//Creating property in the Person constructor function
Person.prototype.species = "Homo Sapiens"


//this is na instance of the constructor function Person
const favorite = new Person('Anu', 1991);
const clement = new Person('Clement', 1995);

// console.log(favorite instanceof Person);

// console.log(favorite.calcAge())
// console.log(clement.calcAge());

// console.log(favorite);
console.log(Person.prototype);
console.log(clement.__proto__.__proto__.__proto__);
console.log(Person.prototype.__proto__);
console.log(Person.prototype === clement.__proto__);

// console.log(clement.hasOwnProperty('firstname'));
// console.log(clement.hasOwnProperty('species'));
// console.log(clement);

const arr = [1,2,3,4,5];

console.log(arr.__proto__.__proto__);

const arr2 = new Array();

console.log(arr2.unique());*/


//Challenge 1

const Car = function (make,speed) {
    this.speed = speed;
    this.make = make;
};


const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 120)

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
    return `${this.speed -= 5}km/h`;
};

// console.log(bmw.brake());
//  console.log(bmw.accelerate());


/////////////////////////////////
 // Challenge 2 (re-create challenge in ES6)

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  brake() {
    this.speed -= 5
    console.log(`${this.speed}km/h`);
    return this
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this
  }

  get speedUS(){
    return `${this.speed / 1.6}mi/h`;
  }

  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

// ford.speedUS = 140;
// console.log(ford.speedUS);


///////////////////////
// Challenge 3
/*

const ElectricCar = function (make, speed, charge) {
    Car.call(this,make,speed);
    this.charge = charge;
};

//linking prototypes: this should be done before creating other method on the child constructor function
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

ElectricCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}




const tesla = new ElectricCar('Tesla', 120, 23 );
tesla.chargeBattery(90);
console.log(tesla);
// console.log(tesla.chargeBattery());
tesla.accelerate();
console.log(tesla.brake());
*/


//////////////////
// Challenge 4

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`
    );

    return this
  };
}


const car = new EVCL('Rivian', 120, 23);

console.log(car.accelerate().accelerate().accelerate().brake());
console.log(car.speedUS);