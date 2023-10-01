// import dataPets from './data.js';
// import { shuffle } from './util.js';

// const arrPets = dataPets.dataPets;
const petsContainer = document.querySelector('.pets__list');
const cardTemplate = document
  .querySelector('#petCardTemplate')
  .content.querySelector('.pets__item');

const removeHtmlPetsCards = () => {
  petsContainer.replaceChildren();
};
// removeHtmlPetsCards();

const createCard = (dataPets) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('img').src = dataPets.img;
  card.querySelector('img').alt = dataPets.name;
  card.querySelector('.pets__name').textContent = dataPets.name;
  return card;
};

const showCard = (dataPets, container) => {
  let cardItemFragment = document.createDocumentFragment();

  dataPets.forEach((pet) => {
    cardItemFragment.appendChild(createCard(pet));
  });

  container.append(cardItemFragment);
};

// showCard(shuffle(arrPets));

export { removeHtmlPetsCards, showCard };
