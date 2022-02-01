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

console.log(arr2.unique());


/////////////////////////////
/**USING ES6 CLASSES TO CREATE PROTOTYPICAL INHERITANCE */


// class declaration
/*
class PersonCl{
    constructor(fullname, birthYear){
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2022 - this.birthYear);
    }

    // getter and setter methods in classes
    set fullname(name){
        if (name.includes(' ')) {
            this._fullname = name
        }else{
            alert(`${name} is not a full name`)
        }
    }

    get fullname(){
        return this._fullname;
    }
}


const ese = new PersonCl('Ese okwi', 1995);

console.log(ese.calcAge());

// Take note

// 1. Classes are not hoisted
// 2. Classes are executed in strict model
// 3. Classes are first time citizens i.e you can pass them through functions and return them in function


//getter and setter properties

const account = {
    owner: 'Jessica',
    movements: [200, 400, 250, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}


console.log(account.latest);


account.latest = 650;
console.log(account.movements);

///////////////////////
/* Using Object.create to create a prototypical inheritance */
/*
const PersonProto = {
  calcAge() {
    return 2022 - this.birthYear;
  },
};


const adam = Object.create(PersonProto);

adam.firstname = "Adam";
adam.birthYear = 2005;

console.log(PersonProto);
console.log(adam.__proto__);


const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
}


const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype)



Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

Student.prototype.constructor = Student;
const mike = new Student('Mike', 2005, 'Software engineer');

mike.introduce();

// console.log(Person.prototype);
// console.log(Student.prototype);

// console.dir(mike);
// mike.calcAge()


// child class for PersonCl class using the extend keyword

class StudentCl extends PersonCl{
    constructor(fullname, birthYear, course){
        super(fullname, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullname} and I am a ${this.course}`);
    }

    calcAge(){
        console.log(
          `I am ${
            2022 - this.birthYear
          } years old but as a student I look more like a ${
            2022 - this.birthYear + 5
          } years`
        );
    }
}

const sola = new StudentCl('Sola Afikode', 1992, 'Computer sc.');

sola.calcAge()
sola.introduce();
console.log(sola);
*/


class Account {

    // Public fields(instances)
    locale = navigator.language;

    // Private fields (instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.locale = navigator.language;
        // this._movements = []
    }

    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
        this.deposit(-val)
    }

    _approveLoan(val){
        return true
    }

    requestLoan(val){
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acct1 = new Account('Jonas', 'EUR', 2222);

acct1.deposit(500);
acct1.deposit(350);
acct1.withdraw(200);


acct1.requestLoan(450);
acct1._approveLoan(200);
console.log(acct1);

// acct1.#movements