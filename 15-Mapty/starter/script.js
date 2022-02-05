'use strict';

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let markerEvent;
// let map;

// const type = inputType.value;
// console.log(type);

// App class
class App {
  #map;
  #markerEvent;
  #workout = [];
  type = inputType.value;

  constructor() {

    // get user's location
    this._getPosition();

    // get data from localStorage
    this._getLocalStorage();

    // handle event listener
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude} = position.coords;

    const coords = [latitude, longitude];

    // display the map form leaflet library
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));// waiting on an event


    // console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
    this.#workout.forEach(work => {
      this._displayMarker(work);
    });
  }

  _showForm(markerE) {
    // console.log(this);
    this.#markerEvent = markerE;
    form.classList.remove('hidden');
    inputDistance.focus();
    // form.style.display = 'grid'
  }

  _hideForm() {
    // clear inputs
    inputDistance.value = inputDuration.value = inputCadence.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    const { lat, lng } = this.#markerEvent.latlng;

    // get all inputs values
    const distance = +inputDistance.value; //the + sign is to convert it to number
    const duration = +inputDuration.value;
    const cadence = +inputCadence.value;
    const elevation = +inputElevation.value;
    let workout;

    const type = inputType.value;

    // Validation of inputs
    const validateInput = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const positiveInput = (...inputs) => inputs.every(inp => inp > 0);

    if (type === 'running') {
      // Validates inputs must be a positive number
      // if (
      //   !Number.isFinite(distance) ||
      //   !Number.isFinite(duration) ||
      //   !Number.isFinite(cadence)
      // )

      if (
        !validateInput(distance, duration, cadence) ||
        !positiveInput(distance, duration, cadence)
      )
        return alert('It is not a positive number');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      if (
        !validateInput(distance, duration, cadence) ||
        !positiveInput(distance, duration)
      )
        return alert('It is not a positive number');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workout.push(workout);
    // console.log(workout);

    this._displayMarker(workout);

    //Render workout on list
    this._renderWorkout(workout);

    //set local storage
    this._setLocalStorage();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    }
    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;
    }

    form.insertAdjacentHTML('afterend', html);

    this._hideForm();
  }

  _displayMarker(workout) {
    // display marker
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();

      
  }

  _moveToPopup(e) {
    const el = e.target.closest('.workout');
    if (!el) return;
    // console.log(el.dataset.id);
    const workout = this.#workout.find(wk => wk.id === el.dataset.id);

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // console.log(workout);
  }

  _setLocalStorage() {
    localStorage.setItem('workout', JSON.stringify(this.#workout));
  }    

  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workout'));
    if (!data) return
    this.#workout = data;

    this.#workout.forEach(work =>{
      this._renderWorkout(work);
    })


  }

  reset(){
    localStorage.clear();
    location.reload()

  }
}

const app = new App();


class Workout {
  date = new Date();
  id = `${Date.now()}`.slice(-5);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    
  }


  _setDescription(){

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }
  
}


class Running extends Workout {
  type = 'running'
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);

    this.cadence = cadence; 
    this.calcPace();
    this._setDescription();
  }

  calcPace(){

    this.pace = this.duration / this.distance;
    return this.pace;
  }
}


class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);

    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration * 60);
    return this.speed;
  }
}


