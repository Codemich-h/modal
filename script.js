'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModals = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');


const openModals = function() {
    console.log('Button Click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModals = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i = 0; i < btnOpenModals.length; i++) 
btnOpenModals[i].addEventListener('click', openModals);

btnCloseModals.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);

