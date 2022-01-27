'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


// Button scrolling
btnScrollTo.addEventListener('click', function (e) {

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({behavior: 'smooth'});
  console.log(window.pageXOffset, window.pageYOffset);
})

// Event listener
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('mouseenter event listener');

//   h1.removeEventListener('mouseenter', alertH1);
// }

// h1.addEventListener('mouseenter', alertH1);


//////////////////////////
// PAGE NAVIGATION

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     // console.log('link', this.getAttribute('href'));
//   })
// })

// USING EVENT DELEGATION
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    // e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})


//////////////
// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();

  // Active tab
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.dataset.tab);

  //Active component
  tabContents.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
})


//////////////////
// NAV ANIMATION

const nav = document.querySelector('.nav');

const fadeOut = function (e) {
   if (e.target.classList.contains('nav__link')) {
     // console.log(e.target);
     const link = e.target;
     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
     const logo = link.closest('.nav').querySelector('img');
     // console.log(siblings);

     siblings.forEach(el => {
       if (el !== link) {
         el.style.opacity = this;
       }
     });
     logo.style.opacity = this;
    //  console.log(this); 
    }
}

nav.addEventListener('mouseover', fadeOut.bind(0.5))
nav.addEventListener('mouseout', fadeOut.bind(1));


//////////////////
// Sticky Navigation
// const iniCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);

//   if (window.scrollY > iniCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }

// })

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: 0.1
// }

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


const stickyView= function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');

  }
}

const observer = new IntersectionObserver(stickyView, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observer.observe(header);

///////////////////////////////
// Revealing Section
const sections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return

    entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section=>{
  sectionObserver.observe(section);

  section.classList.add('section--hidden');
})


//////////////////////////////
// Revealing Images

// select the images
const images = document.querySelectorAll('.features__img');

// observe the images
const revealImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src
  
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
  console.log(entry);
}
const imageObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

images.forEach(img=> imageObserver.observe(img))
