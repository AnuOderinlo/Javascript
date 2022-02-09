'use strict';


// challenge 1

// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
//         return res.json()
//     })
//     .then(data => {
//         const country = data.country;
//         return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(res=> {
//          if (!res.ok) throw new Error(`could not found country ${res.status}`);
//          return res.json();
//         console.log(res.json());
//     })
//     .then(([data]) => {
//         console.log(data);
//     })
//     .catch(err => console.error(`${err.message}`));
// }

// whereAmI(19.037, 72.873);
// whereAmI(52.508, 13.381); 
// whereAmI(-33.933, 18.474);


// Challenge 2
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener("load", function () {
          document
            .querySelector(".images")
            .append(img);

            resolve(img)
        });

        img.addEventListener("error", function () {
            reject(new Error('Image not found'))
        });



    })
}


let currImage;

createImage("img/img-1.jpg")
    .then(img=>{
        currImage = img;
        console.log('image 1 loaded');
        return wait(2)
    })
    .then(()=>{
        currImage.style.display = 'none';
        return createImage("img/img-2.jpg");
        console.log('image 2 loaded');
    })
    .then((img)=>{
        currImage = img;
        return wait(2);
        console.log(currImage);
    })
    .then(()=>{
        currImage.style.display = 'none';
        return createImage("img/img-3.jpg");
    })
    .catch(err=> console.log(err))