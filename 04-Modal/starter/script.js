'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//!opening the modal funtion
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//!closing the Modal function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//!forloop for three btns
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}
//!clode button
btnCloseModel.addEventListener('click', closeModal);
//!overlay close click
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        };
    }
});