'use strict'

// const myName = 'Anu';

// function first() {
//     const age = 30;

//     if (age >= 30) {
//         const decade = 3;
//         var millenial = true;
//     }

//     function second() {
//         const job = 'teacher';

//         console.log(`${myName} is a ${age}-old ${job}`);
//     }

//     second();
// }

// first(); 

/*
// hoisting variables
console.log(fName);
// console.log(age);
// console.log(job);

var fName = 'tola';
let age = 20;
const job = 'teacher';


// hoisting functions

console.log(addName(2,3));
// console.log(addAno(2,3));
console.log(addArrow(2,3));

function addName(a,b) {
    return a + b;
}

const addAno = function (a,b) {
    return a + b;
}

const addArrow = (a,b)=> a + b;

var firstName = 'anu';

console.log(this.firstName);




const jonas = {
    firstName: 'Anuoluwapo',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
    },
    greet: () =>{ 
        console.log(this);
        console.log(`How are you ${this.firstName}`)}
}



// arguments keyword

function check(a,b,c) {
    console.log(arguments);
}

check(2,3,4)
*/

//PRIMITIVE AND REFERENCE(NON - PRIMITIVE)
const anu = {
    fName : 'Anuoluwapo',
    lName: 'Oderinlo',
    age: 30,
    family: ['Tobi', 'Asher', 'Tayo'],
}

const ese = Object.assign({}, anu);
ese.family.push('Seyi', 'Seye');
ese.lName = 'Oderinlo';
ese.fName = 'ese';

console.log('Anu', anu);
console.log('Ese', ese);