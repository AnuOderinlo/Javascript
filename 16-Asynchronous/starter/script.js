'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function renderCountry(data, className = '') {
    const { name, symbol } = data.languages[0];
    //   const {name, symbol} = data.currencies;
    const { svg, png } = data.flags;
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

function getCountryAndNeighborData(country) {
    

    // AJAX call for data for country
    const request = new XMLHttpRequest();
    
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        const request = new XMLHttpRequest();

        renderCountry(data);

        // get country neighbor
        const [neighbor] = data.borders;

        console.log(neighbor);

        // AJAX 2 call for data for country
        const request2 = new XMLHttpRequest();

        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
        request2.send();


        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
            console.log(data2);
        });
    })
}


getCountryAndNeighborData('nigeria');
// getCountryData('usa');
// getCountryData('portugal');

