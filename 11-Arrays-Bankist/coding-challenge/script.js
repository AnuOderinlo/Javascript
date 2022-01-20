'use strict';



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


/*
const arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-3));// return the last 3 elements
console.log(arr.slice(1, -2));// start from index 1 and exclude the last 2


//SPLICE METHOD: this mutate the original array
console.log(arr.splice(2));
console.log(arr);

//REVERSE: this mutate the original array
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

//CONCAT

console.log(arr1.concat(arr2));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//FOREACH METHOD ITERATION WITH ARRAY

// movements.forEach(function (move, i) {
  //   if (move > 0) {
    //     console.log(`Movement ${i+1}: you credited ${move}`);
    //   }else{
      //     console.log(`Movement ${i+1}: you withdrew ${Math.abs(move)}`);
      //   }
      // })
      
      //FOREACH METHOD ITERATION WITH MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function (value, keys, map) {
  console.log(`${keys}: ${value}`);
})
  */


//CODING CHALLENGE 1
/*
const checkDogs = function (dogsJulia, dogsKate) {
    //task 1 
    const dogsJuliaCopied = dogsJulia.slice(1,3);
    // console.log(dogsJulia);
    // console.log(dogsJuliaCopied);
    //task 2
    const bothData = [...dogsJuliaCopied, ...dogsKate];
    // console.log(bothData);
    //task 3

    bothData.forEach(function (age, i) {
        if (age >= 3) {
            console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
          }else{
            console.log(`Dog number ${i+1} is still a puppy 🐶`);
            
        }
    })
    
  }

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

//CODING CHALLENGE 2

// const calAverageHumanAge =function (ages) {
//   const humanAge = ages.map(age => age <= 2? 2 * age : 16 + age *4);
//   const adultAge = humanAge.filter((hage) => hage >=18 );
//   const averageAge = adultAge.reduce((acc, cur)=> acc+cur, 0) / adultAge.length
//   console.log(humanAge);
//   console.log(adultAge);
//   console.log(averageAge);
// }

// calAverageHumanAge([3, 5, 2, 12, 7]);

//CODING CHALLENGE 3: Rewriting challenge 2 in a chaining form

const calAverageHumanAge =function (ages) {

  const averageAgeChain = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((hage) => hage >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  
  console.log(averageAgeChain);
}

calAverageHumanAge([3, 5, 2, 12, 7]);