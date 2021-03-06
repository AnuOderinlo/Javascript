'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



//THE BACKIST APP
let currentAcct;

//login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAcct = accounts.find(function (acct) {
    return (
      acct.username === inputLoginUsername.value &&
      acct.pin == Number(inputLoginPin.value)
    );
  });

  if (currentAcct) {
    console.log(currentAcct);
    labelWelcome.textContent = `Welcome, ${currentAcct.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //hides the inputs field
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateAccountUI(currentAcct);
    // console.log('You are logged in');
  } else {
    labelWelcome.textContent = `username or password is not correct`;
    containerApp.style.opacity = 0;
    // console.log('username or password is not correct');
  }


})

//Transfer Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcct = accounts.find(
    acct => inputTransferTo.value === acct.username
  );
  // console.log(receiverAcct, currentAcct);
  if (
    amount > 0 &&
    amount <= currentAcct.balance &&
    receiverAcct?.username !== currentAcct.username
  ) {
    console.log('You can transfer the money');

    //empty the inputs(amount and username);
    inputTransferAmount.value = inputTransferTo.value = '';

    //amount added to receiver balance and deducted from sender
    receiverAcct.movements.push(amount);
    currentAcct.movements.push(-amount);

    //update sender interface account
    updateAccountUI(currentAcct);
  }
});

//delete account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('delete');

  if (
    inputCloseUsername.value === currentAcct.username &&
    Number(inputClosePin.value) === currentAcct.pin
  ) {
    const index = accounts.findIndex(function (acct) {
      return inputCloseUsername.value === currentAcct.username;
    });

    //delete current account
    accounts.splice(index, 1);

    //update UI by hiding account
    containerApp.style.opacity = 0;
  }
  console.log(accounts);
  inputCloseUsername.value = inputClosePin.value = '';
});

//Get Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountLoan = Number(inputLoanAmount.value);
  const depositGreater = currentAcct.movements.some(
    mov => mov > 0.1 * amountLoan
  );

  if (amountLoan > 0 && depositGreater) {
    console.log('loan approved');

    //amount added to receiver balance and deducted from sender
    currentAcct.movements.push(amountLoan);

    //update sender interface account
    updateAccountUI(currentAcct);

    //empty the inputs(amountLoan);
    inputLoanAmount.value = '';
  }

  // console.log(depositGreater);
});

//Sort Movement

//sort boolean
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('You can sort');
  displayMovement(currentAcct.movements, !sorted);
  sorted = !sorted;
});



const updateAccountUI = function (acct) {
  displayBalance(acct);
  summary(acct);
  displayMovement(acct.movements);
}

const displayBalance = function (acct) {
  acct.balance = acct.movements.reduce((acc, mov)=> acc + mov);
  labelBalance.textContent = `${acct.balance} EUR`;
}

const summary = function (acct) {
  const income = acct.movements.filter(mov => mov > 0).reduce((acc, mov)=> acc+mov, 0);
  
  const out = acct.movements
    .filter((mov, i, arr) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acct.movements.filter(mov => mov > 0).map(mov=> mov * acct.interestRate).reduce((acc, mov)=> acc+mov,0);
  labelSumIn.textContent = `${income}???`;
  labelSumOut.textContent = `${Math.abs(out)}???`;
  labelSumInterest.textContent = `${interest}???`;
  // console.log(income + out);
}

const displayMovement = function (movements, sort = false) {

  const acctMovement = sort? (movements.slice().sort((a,b)=> a - b)) : movements; 


  containerMovements.innerHTML = '';
  acctMovement.forEach((mov, i) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${Math.abs(mov)}???</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const createUsername = function (acct) {

  acct.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(el=>el[0]).join('');
    // console.log(acc);
  });
  
}

createUsername(accounts)


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


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

/*
//MAP METHOD
const eurToUsd = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
})
//arrow function
const movementUsdArrow = movements.map(mov=> mov * eurToUsd)

console.log(movementUSD);
console.log(movementUsdArrow);


//FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov=> mov > 0)

const withdraw = movements.filter(mov => mov < 0);

console.log(deposits);
console.log(withdraw);


//REDUCE METHOD

const balance = movements.reduce(function (acc, cur) {
  return acc + cur;
}, 0)

console.log(balance);

//FIND METHOD: THIS RETURN THE FIRST ELEMENT IN THE ARRAY THAT MATCHES THE CONDITION

const acctName = accounts.find(name => name.owner === 'Sarah Smith');

console.log(acctName);

//SOME METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//used for equality
const depositAvailable = movements.includes(4000);

//Used for condition
const deposit = movements.some(mov => mov >= 3000);
console.log(depositAvailable);
console.log(deposit);

//EVERY METHOD: If every element in an array pass the condition
const depositAll = movements.every(mov => mov > 0);
console.log(depositAll);

//FLAT METHOD: this combines all one level nested array into a single array

const arr = [[1,2,3], [4,5,6], 7,8];
const arr2 = [[[1,2],3], [4,[5,6]], 7,8];

console.log(arr.flat());
console.log(arr2.flat(2));

//Example from the Backist app. Calculate the total movement in all accounts
const overallAmount = accounts.map(mov=> mov.movements).flat().reduce((acc,cur)=> acc + cur);

console.log(overallAmount);

//USING THE FLATMAP METHOD.
const overallAmount2 = accounts.flatMap(mov=> mov.movements).reduce((acc,cur)=> acc + cur);
console.log(overallAmount2);



//SORT METHOD: Note, this will mutate(change) the original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const str = ['Moses', 'Ese', 'Zion', 'Anu', 'David', 'Bola'];


// return < 0, A, B (/keep Order)
// return > 0, B, A (/Switch Order)

// console.log(str.sort());
console.log(movements);

//ascending order
// const numbers = movements.sort((a,b)=> {
//   if (a > b) {//this will switch
//     return 1;
//   }
//   if (a < b) {//this will keep order
//     return -1;
//   }
// });
const numbers = movements.sort((a,b)=> a - b);
console.log(numbers);


const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Descending order
// const numbers2 = movements2.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
// });

const numbers2 = movements.sort((a, b) => b - a);
console.log(numbers2);

*/


//MORE WAYS OF CREATING AND FILLING ARRAYS

const arr = [1,2,3,4,5,6,7];
const x = new Array(7);
//FILL METHOD
x.fill(4);

arr.fill(8, 2,4)

console.log(x);
console.log(arr);

// Array.from
const y = Array.from({ length: 10 }, (cur, i) => i + 1);

// console.log(y);

document.querySelector('body').addEventListener('click', function () {
  const movementRetrieve = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('???', ''))
  );
  console.log(movementRetrieve);
  
})


