'use strict';


let hasDriversLicense = false;
let passTest = true;


if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('You can drive now');

/*
//FUNCTION DECLARATION
function calAge1(birthYear) {
    const currentYear = 2021;
    return currentYear - birthYear;

}

const age1 = calAge1(1991);

console.log(age1);

//FUNCTION EXPRESSION
const calAge2 = function (birthYear) {//Also called anonymous function
    return 2021 - birthYear;
}
const age2 = calAge2(1991);
console.log(age2);

//ARROW FUNCTION
const calAge3 = birthYear => 2021 - birthYear;

const age3 = calAge3(1992);
console.log(age3);


const retirementYearsLeft = birthYear => {
    const age = 2021 - birthYear;
    const yearsRemaining = 65 - age;
    return yearsRemaining;
}


console.log(retirementYearsLeft(1991));


//FUNCTIONS CALLING OTHER FUNCTION

function cutFruitPieces(fruit) {
    return fruit * 4;

}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    
    return juice
}

console.log(fruitProcessor(2, 4));


//CHALLENGE ONE
const calcAverage = (a,b,c) => (a+b+c)/3;//number 1

//test data one
// const dolphinsAverage = calcAverage(44,23,71);
// const koalasAverage = calcAverage(65,54,49);
//test data two
const dolphinsAverage = calcAverage(85,54,41);
const koalasAverage = calcAverage(23,34,27);

function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage > (2 * koalasAverage)) {
        return `Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`;
    }else if (koalasAverage > (2 * dolphinsAverage)) {
        return `koalas win (${koalasAverage} vs. ${dolphinsAverage})`;
    }else{
        return `No team wins`;

    }
}

const winner = checkWinner(dolphinsAverage, koalasAverage);

console.log(winner);

//CHALLENGE TWO

function calcTip(bill) {
    if (bill >= 50 && bill <=300) {
        const tip = bill * 0.15;
        return tip;
    }else{
        const tip = bill * 0.2;
        return tip;
    }
}


const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

*/

/** OBJECT **/
/*
const person = {
    firstName: 'Ese',
    lastName: 'Okwi',
    job: 'Customer Service Agent',
    birthYear: 1995,
    hasDriversLicense: true,
    friends: ['Anuoluwapo', 'Ifunanya', 'Ruth', 'Bukky'],
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    driversLicense: function () {
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and  she has ${this.hasDriversLicense? 'a':'no'} driver's license`
        
    }

};


// const askQuestion = prompt('What will you like to know about this person? firstName, lastNAme, age, job or friends!');


// if (person[askQuestion]) {
//     console.log(person[askQuestion]);
// }else{
//     console.log('Wrong question! What will you like to know about this person? firstName, lastNAme, age, job or friends!');
// }

// console.log(`${person.firstName} has ${person.friends.length} friends, and her best friend is ${person.friends[0]}`);

console.log(person.calcAge());
// console.log(person);

console.log(person.driversLicense());

//CHALLENGE 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass/(this.height * this.height)
        return this.BMI;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass/(this.height * this.height)
        return this.BMI;
    }
}

// console.log(mark.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI(${mark.BMI})' is higher than ${john.fullName}'s (${john.BMI})'`);
}else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI(${john.BMI})' is higher than ${mark.fullName}'s (${mark.BMI})'`);
}
*/

// PROBLEM
// Get the Max and Min value in an array and also get the difference between the max and min


//Solution
// 1. Write a function that will do that
// 2. Get the MAx 
// 3. Get the Min 
// 4. Then get the difference between MAx and Min.

/*
function diffMaxAndMin(ary) {
    let max = ary[0];
    let min = ary[0];

    for (let i = 0; i < ary.length; i++) {
        if (ary[i] > max) {
            max = ary[i];
        }
        if (ary[i] < min) {
            min = ary[i];
        }
    }

    console.log(max, min);
    console.log(max - min);
}

diffMaxAndMin([2,9,1,3,5,4,11,-5,-4,-6]);
*/

//CHALLENGE 1 (DEVELOPER SKILLS & EDITOR SETUP)

function printForcast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str +  `... ${arr[i]}C in ${i + 1} days`;
    }
    // let result = str.toString()
    
    console.log(str);
}


printForcast([17, 21, 23]);
