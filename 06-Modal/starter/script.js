'use strict';


let showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// this function opens the modal
const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// this function closes the modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModal)
}

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


document.addEventListener('keydown', function (e) {

    //ORIGINAL CODE
    // if (e.key === 'Escape') {
    //     if (!modal.classList.contains('hidden')) {
    //        closeModal(); 
    //     }
    // }

    //REFACTORED CODE
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal(); 
    }
})