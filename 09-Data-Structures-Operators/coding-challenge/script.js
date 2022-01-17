'use strict'

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


/*

//CHALLENGE 1
//task 1
const [players1, players2] = game.players;
// console.log(players1, players2);

//task 2
const [gk, ...fieldPlayers] = players1;
 
// console.log(players1);
//task 3
const allPlayers = [...players1, ...players2]

// console.log(allPlayers);

//task 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

//task 5
const {team1, x:draw, team2} = game.odds;
// console.log(draw);

// task 6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
    
  }
  console.log(`Total goals scored: ${players.length}`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Task 7
team1 < team2 && console.log('Team 1 is likely to win the game');
team1 > team2 && console.log('Team 2 is likely to win the game');

// CHALLENGE 2

// Task 1
for (let i = 0; i < game.scored.length; i++) {
  // console.log(`Goal ${i+1}: ${game.scored[i]}`);
}

// Task 2 
const odds = Object.values(game.odds);
let averageOdd = 0;
for (const oddValue of odds) {
  averageOdd+=oddValue;
}
// console.log(`The average odd is ${averageOdd/odds.length}`);

// Task 3
// const teams = Object.keys(game.odds);

for (const [key, value] of Object.entries(game.odds)) {
  let str = key === 'x'? 'draw' : `victory ${key}`;
  console.log(`Odd of ${str}: ${value}`);
}



// Task 4
const occurence = function (arr, val) {
  let count = 0;
  arr.forEach(v =>(v === val)? count++ : count);
  return count;
}

const scorers = {};
let playerName = game.scored;

for (let i = 0; i < playerName.length; i++) {
  scorers[playerName[i]] = occurence(playerName, playerName[i]);
  
}

// console.log(scorers);


// CHALLENGE 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);


// Task 1
let events = gameEvents.values();

const uniqueEvents = new Set(events);

events = [...uniqueEvents];

console.log(events);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// console.log(gameEvents.values());

// Task 3
const lastMin = [...gameEvents.keys()].pop();

console.log(lastMin);
console.log(`An event happened, on average, every ${lastMin/gameEvents.size} minutes`);

// Task 4

for (const [keys, values] of gameEvents) {
  const half = keys < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${keys}: ${values}`);
}
*/

//CHALLENGE 4
const text = document.body.append(document.createElement("textarea"));
const btn = document.body.append(document.createElement("button"))


const camelCase = function (underscore) {
  /*
    1. convert the underscore to array
    2. split each element in the new array by replacing the _ with space
  */

    // if (condition) {
      
    // }


    let arrUnderscore = underscore.split("\n");
    let arr = [];
    let arr2 =[];
    for (const el of arrUnderscore) {
      arr.push(el.trim().toLowerCase().replace('_', ' '));
    }

    for (const el of arr) {
      // console.log(el.split(' '));
      arr2.push(el.split(" "));
    }

    for (const [i, [first, second]] of arr2.entries()) {
      let mark = '✅';
      let result= `${first}${second.replace(second[0], second[0].toUpperCase())}`
      console.log(`${result.padEnd(20)} ${mark.repeat(i+1)}`);
      // console.log(el[0] + el[1].replace(el[1][0], el[1][0].toUpperCase()));
    }
    // console.log(arr2);
    // console.log(arrUnderscore);
    // console.log(arr);
};

// camelCase('underscore_case first_name Some_Variable calculate_AGE delayed_departure');

document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  let textValue = document.querySelector('textarea').value;

  // console.log(textValue);
  camelCase(textValue);
})

