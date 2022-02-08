'use strict';


// challenge 1

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
        return res.json()
    })
    .then(data => {
        const country = data.country;
        return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(res=> {
         if (!res.ok) throw new Error(`could not found country ${res.status}`);
         return res.json();
        console.log(res.json());
    })
    .then(([data]) => {
        console.log(data);
    })
    .catch(err => console.error(`${err.message}`));
}




whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381); 
whereAmI(-33.933, 18.474);