import dataPets from './data.js';
const arrPets = dataPets.dataPets;

const slidersContainer = document.querySelector('.pets__list');
const body = document.querySelector('html');

const modal = document.querySelector('.modal');

// const createModal = (arrPets) => {
//   const cardModal = modal.cloneNode(true);

//   cardModal.querySelector('img').src = arrPets.img;
//   cardModal.querySelector('img').alt = '';
//   cardModal.querySelector('.modal__name').textContent = arrPets.name;
//   return cardModal;
// };

// const showCard = (dataPets, container) => {
//   let cardItemFragment = document.createDocumentFragment();

//   dataPets.forEach((pet) => {
//     cardItemFragment.appendChild(createModal(pet));
//   });

//   container.append(cardItemFragment);
// };
// showCard(arrPets, body);

slidersContainer.addEventListener('click', (evt) => {
  modal.classList.toggle('visually-hidden');
  body.classList.add('lock');
  console.log(evt.target);
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modal.classList.add('visually-hidden');
    body.classList.remove('lock');
  }
});

document.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('lock') ||
    evt.target.classList.contains('modal__button--close')
  ) {
    modal.classList.add('visually-hidden');
    body.classList.remove('lock');
  }
});

// const closeModalButton = document.querySelector('.modal__button--close');

closeModalButton.addEventListener('click', () => {
  document.removeChild(document.querySelector('.modal'));
});

console.log(document.querySelector('.modal'));
