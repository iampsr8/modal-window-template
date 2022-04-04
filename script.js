'use strict';
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function () {
        if (i === 0) modal1.classList.remove('hidden');
        else if (i === 1) {
            modal2.classList.remove('hidden');
        }
        else {
            modal3.classList.remove('hidden');
        }
        overlay.classList.remove('hidden');
    });
}

for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function () {
        if (i === 0) {
            modal1.classList.add('hidden');
        }
        else if (i === 1) {
            modal2.classList.add('hidden');
        }
        else {
            modal3.classList.add('hidden');
        }
        overlay.classList.add('hidden');
    });
}
const modallAll = [modal1, modal2, modal3];
overlay.addEventListener('click', function () {
    for (let i = 0; i < modallAll.length; i++) {
        modallAll[i].classList.add('hidden');
    }
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        for (let i = 0; i < modallAll.length; i++) {
            if (!(modallAll[i].classList.contains('hidden'))) {
                modallAll[i].classList.add('hidden');
                overlay.classList.add('hidden');
            }
        }
    }
});
