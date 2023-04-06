import dataPets from './data.js';
const arrPets = dataPets.dataPets;
const petsContainer = document.querySelector('.pets__list');
const cardTemplate = document
  .querySelector('#petCardTemplate')
  .content.querySelector('.pets__item');

const removeHtmlPetsCards = () => {
  petsContainer.replaceChildren();
};
removeHtmlPetsCards();

const createCard = (dataPets) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('img').src = dataPets.img;
  card.querySelector('img').alt = '';
  card.querySelector('.pets__name').textContent = dataPets.name;
  return card;
};

const showCard = (pets) => {
  let cardItemFragment = document.createDocumentFragment();

  pets.forEach((pet) => {
    cardItemFragment.appendChild(createCard(pet));
  });

  petsContainer.append(cardItemFragment);
};

showCard(arrPets);

console.log(dataPets.dataPets);
