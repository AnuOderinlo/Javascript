'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function renderCountry(data, className = '') {
    const { name, symbol } = data.languages[0];
    //   const {name, symbol} = data.currencies;
    // const { svg, png } = data.flags;
      
    const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${+(
                      data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country__row"><span>🗣️</span>${name}</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                </div>
            </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;

}
/*
// function getCountryAndNeighborData(country) {
    

//     // AJAX call for data for country
//     const request = new XMLHttpRequest();
    
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         const request = new XMLHttpRequest();

//         renderCountry(data);

//         // get country neighbor
//         const [neighbor] = data.borders;

//         console.log(neighbor);

//         // AJAX 2 call for data for country
//         const request2 = new XMLHttpRequest();

//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//         request2.send();


//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour');
//             console.log(data2);
//         });
//     })
// }


// getCountryAndNeighborData('nigeria');
// getCountryData('usa');
// getCountryData('portugal');



/*************** PROMISE************* */
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(promise => {
    if (!promise.ok) {
      throw new Error(`${errorMsg} ${promise.status}`);
    }
    return promise.json();
  });
};
/*

// const getCountryData = function (country) {
    
//     fetch(`https://restcountries.com/v2/name/${country}`)
//       .then(promise => {
//         //   console.log(promise);
//           if (!promise.ok) {
//               throw new Error(`Country not found ${promise.status}`)
//           }
//           return promise.json()
//         })
//       .then(([data]) => {
//         // const [neighbor] = data.borders;
//         const neighbor = '';
//         // console.log(neighbor);
//         renderCountry(data);
//         if (!neighbor) return;

//         return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//       })
//       .then(promise =>{
//           console.log(promise);
//            if (!promise.ok) {
//              throw new Error(`No neighbor found ${promise.status}`);
//            }
//            return promise.json()
//         })
//       .then(data => renderCountry(data, 'neighbour')).catch(err=> {

//         console.log(err.message);
//           renderError(`something went wrong 🚫🚫 : ${err.message}`)
//       }).finally(()=> countriesContainer.style.opacity = 1);
// }




const getCountryData = function (country) {
    return getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(([data]) => {
        renderCountry(data);
        const neighbor= data.borders[0];
        // const neighbor = data.border;
        // const neighbor = 'czz';
        console.log(neighbor);
        if (!neighbor) throw new Error('No neighbor found');

        return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
        );
    })
    .then(data => {
        renderCountry(data, 'neighbour')
    })
    .catch(err=> {

        console.log(err.message);
        renderError(`something went wrong 🚫🚫 : ${err.message}`)
    }).finally(()=> countriesContainer.style.opacity = 1);
      
};

btn.addEventListener('click', function (e) {
    e.preventDefault();
    getCountryData('nigeria')
    
})

getCountryData('nigeria');
// getCountryData('australia');
*/


/////////// EXPLAINING HOW ASYNCHRONOUS JS WORKS
// console.log('Test Start');
// setTimeout(() =>  console.log('0 sec timer'), 0);
// Promise.resolve('Resovled promise 1').then(res=> console.log(res))
// console.log('Test end');


// const lottery = new Promise(function (resolve, reject) {
//     console.log('lottery is happening now....');
//     setTimeout(() => {
//          if (Math.random() >= 0.5) {
//            resolve('You win a lottery');
//          } else {
//            reject(new Error('You lost'));
//          }
//     }, 2000);
   
// });



// lottery.then(res=>{
//     console.log(res);
// }).catch(err=> console.error(err))


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}


// wait(4)
//   .then(() => {
//     console.log('I waited for 4  seconds');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I waited for 3 second');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited for 2 second');
//     // return wait(2);
//   });


const geoLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(position=> resolve(position), err=> reject(err));
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// geoLocation.then(pos =>{
//   const {latitude, longitude} = pos.coords
//    console.log(latitude, longitude);
// }) 

// const whereAmI = function () {
//   geoLocation().then(pos => {
//     const { latitude: lat, longitude:lng } = pos.coords;
//     console.log(lat, lng);
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       const country = data.country;
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`could not found country ${res.status}`);
//       return res.json();
//       console.log(res.json());
//     })
//     .then(([data]) => {
//       renderCountry(data)
//       console.log(data.name);
//     })
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', whereAmI);


const whereAmI = async function () {

  try {
    // Getting the coordinates
    const geoPos = await geoLocation();
    const { latitude: lat, longitude: lng } = geoPos.coords;

    // Fetching geolocation data
    const resPos = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resPos.ok) {
      throw Error('Something is wrong with the geolocation');
    }

    const resData = await resPos.json();
    console.log(resData);

    //Fetching Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${resData.country}`
    );
    if (!res.ok) {
      throw Error('Something is wrong with the country data');
    }
    const [data] = await res.json();

    renderCountry(data);

    return `You are in ${resData.city}, in ${resData.country}`;
  } catch (err) {
    renderError(err.message);

    throw err;
  }
  
}

console.log('1. will get location');

// whereAmI()
//   .then(city=> console.log(city))
//   .catch(err=> console.error(err.message))
//   .finally(()=> console.log('3.Finished getting location'))

// console.log('2. finished getting location');

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.log(err.message);
//   }
//   console.log('3.Finished getting location')
// })()


/////////////////////////
// Running promises in Parallel(i.e not depending on each other)

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    // data.map(([dt])=> dt.capital)
    console.log(data.map(([dt]) => dt.capital));
  } catch (error) {
    console.error(error)
  }
  
}

get3Countries('nigeria', 'ghana', 'canada')