'use strict';

/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}


const upperFirstWord = function (str) {
    const [first, ...others] =  str.split(" ");
    return [first.toUpperCase(), ...others].join(' ');

}

//Higher Order functions and callback function
const transformer = function (str, fn) {
    console.log(`Original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);
    console.log(`Transformed by ${fn.name} function`);
}

// transformer('anuoluwapo is a software engineer',upperFirstWord)
// transformer('anuoluwapo is a software engineer',oneWord)

//FUNCTIONS THAT CALLS FUNCTIONS
// const greet = function (greeting) {
//     return function (name) {
//         console.log(greeting, name);
//     }
// }


//arrow function of greet()
const greet = greeting => name=>console.log(greeting, name);

//  console.log(greet('Heyiii'));

greet('What\'s up')('Anu')


const greeter = greet('Heyiii');

 greeter('Anu') 
 greeter('Tayo')

 /* THE CALL AND APPLY METHOD*/
/*
 const ibomair = {
    airline: 'Ibom air',
    code: 'IB',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`);
        
        this.bookings.push({ flight: `${this.code}${flightNum}`, name });
    },

 }

 const arikair = {
     airline: 'Arik air',
     code: 'AR',
     bookings: [],
 }

 const book = ibomair.book;

 // call function
 book.call(arikair, 244, 'Tobi Selman');
 book.call(arikair, 299, 'Joshua Selman');
 book.call(ibomair, 244, 'Ese Okwi');
 
 // apply function
 book.apply(ibomair, [123,'Bukky'])
 
//  console.log(ibomair);
//  console.log(arikair);

//  ibomair.book(234, 'Anuoluwapo Oderinlo')
//  ibomair.book(211, 'Tayo Felix')


//BIND METHOD::: Bind method will return another function

const bookIB = book.bind(ibomair);
const bookAR = book.bind(arikair);


//partial application::: this means a part of the argument is already set in the original function
const bookIB111 = book.bind(ibomair, 111);

// console.log(bookIB);

// bookIB(111, 'Tolu');
// bookAR(255, 'Clement');

// bookIB111('Francis');
// bookIB111('Adams');

// BIND with Event listeners
ibomair.planes = 400;
ibomair.buyPlane = function () {
    console.log(this);
    this.planes ++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', ibomair.buyPlane.bind(ibomair));



//partial application
const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.5);

console.log(addVAT(150));

// console.log(addTax(0.5, 400));
// const addTax = function (value) {
//     return function (rate) {
//         return value + value * rate;
//     }   
// }

// console.log(addTax(150)(0.5));


// CHALLENGE 1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer(){
        let ans = prompt(`${poll.question}\n${poll.options[0]}\n${poll.options[1]}\n${poll.options[2]}\n${poll.options[3]}\n`);
        if (ans) {
          for (let i = 0; i < this.answers.length; i++) {
            if (Number(ans) === i) {
              console.log(ans);
              this.answers[i]++;
            }
          }
          console.log(this.answers);
        }
        
    //    console.log(this.answers);
    }
};

poll.displayResults = function (type) {
    if (typeof type === 'object') {
        console.log(this.answers);
    }else if (typeof type === 'string') {
        // console.log(`Poll results are ${type}`);
    }
        console.log(`Poll results are ${this.answers.join()}`);
        // console.log(typeof type);
}

//task 2
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
// poll.registerNewAnswer();
// console.log(poll.answers);
// console.log(poll);
// poll.displayResults("2,5,4,3");

//CLOSURES
/*
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 32;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
// console.dir(f)
console.log('RE-assinging f function');
h();
f()
// console.dir(f)

*/
//example 2


// setTimeout(() => {
//     console.log("This happened after 1 seconds");
// }, 1000);



// CHALLENGE 2


(function(){
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
      header.style.color ='blue'
  })
})();