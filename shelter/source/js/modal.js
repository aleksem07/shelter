import dataPets from './data.js';
const arrPets = dataPets.dataPets;

const slidersContainer = document.querySelector('.pets__list');
const body = document.querySelector('html');

const modal = document.querySelector('.modal');

slidersContainer.addEventListener('click', (evt) => {
  modal.classList.toggle('visually-hidden');
  body.classList.add('lock');

  arrPets.forEach((i) => {
    setTimeout(() => {
      if (evt.target.alt == i.name) {
        modal.querySelector('img').src = i.img;
        modal.querySelector('.modal__name').textContent = i.name;
        modal.querySelector('.modal__breed').textContent = `${i.type} - ${i.breed} `;
        modal.querySelector('.modal__desc').textContent = i.description;
        modal.querySelector('.about-item__age').textContent = i.age;
        modal.querySelector('.about-item__inoculations').textContent = i.inoculations;
        modal.querySelector('.about-item__diseases').textContent = i.diseases;
        modal.querySelector('.about-item__parasites').textContent = i.parasites;
      }
      modal.style.opacity = '1';
    }, 100);
  });
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modal.style.opacity = '0';
    modal.classList.add('visually-hidden');
    body.classList.remove('lock');
  }
});

document.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('lock') ||
    evt.target.classList.contains('modal__button--close')
  ) {
    modal.style.opacity = '0';
    modal.classList.add('visually-hidden');
    body.classList.remove('lock');
  }
});
