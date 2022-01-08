

/*let year;

console.log(year);
console.log(typeof year);

console.log(typeof null)*/


// challenge one

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;


// console.log(markBMI, johnBMI, markHigherBMI);

// console.log(`Hello Anuoluwapo,\n\You are about to regain your place in victory\n\You should focus on consistency and hard work really\n\ You must not stop this time around\n\
// By God's grace, you have just 3 months of dedication and hardwork to prepare. \n\ your effort will yield success in Jesus name. Amen`);


/*
//CHALLENGE 2
const age = 14;

if (age >= 18) {
    console.log(`Anu can starts driving lessons 🚗`);
}else{
    const yearsLeft = 18 - age;

    console.log(`You have ${yearsLeft} years left to start learning, so sorry!`);
}*/

/*
if (markBMI > johnBMI) {
    console.log(`Mark.s BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}else{
    console.log(`Mark.s BMI (${markBMI}) is lower than John's BMI (${johnBMI})`);

}*/

/*
//CHALLENGE 3

// const  dolphinsAverageScore = (96 + 108 + 89)/3;
// const  koalasAverageScore = (88 + 91 + 110)/3;

const dolphinsAverageScore = (97 + 112 + 101)/3;
const koalasAverageScore = (109 + 95 + 123)/3;
const minimumScore = 100;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
    console.log(`Dolphins is the winner of the competition`);
}else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumScore) {
    console.log(`Koalas is the winner of the competition`);
}else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= minimumScore) {
    console.log(`It is a draw`);
}
else{
    console.log(`no team wins the trophy`);
}*/

//SWITCH STATEMENT
/*const day = "wednesday";

switch (day) {
    case 'monday':
    case 'tuesday':
        console.log("Write Code and continue to learn Javascript");
        console.log("Search for Visa interview questions and answers");
        break;
    case 'wednesday':
        console.log("Go for retreat and converse with God");
        break;
    case 'thursday':
        console.log("Learn PHP and OOP");
        break;
    case 'friday':
        console.log("Go get some money");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend!!✌✌");
        break;
    default:
        console.log("Not a valid day");
} */


/*****NOTES****/
/* 
An expression is a pieace of code that produces a value
Example: 3 + 4, 1991, true && false && !false etc...

A statement does not realy produce a value 


 */



 //CODING CHALLENGE 4
const bill = 430 ;
const tip = bill >= 50 && bill <=300? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);