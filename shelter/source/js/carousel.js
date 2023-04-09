import { removeHtmlPetsCards, showCard } from './petsCard.js';
import dataPets from './data.js';

const arrPetsFill = dataPets.dataPets
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets)
  .concat(dataPets.dataPets);

const arrPets = arrPetsFill
  .map((el, i, arr) => arr.splice(0, 3))
  .filter((element) => element != null);

const nextButton = document.querySelector('.pets-slider__arrow--right');
const prevButton = document.querySelector('.pets-slider__arrow--left');

let count = 0;

const petsContainer = document.querySelector('.carousel');

const sliderSwitcher = (math) => {
  petsContainer.style.opacity = '0';
  setTimeout(() => {
    removeHtmlPetsCards();
    math;
    if (count >= arrPets.length - 1) {
      count = 0;
    }
    if (count < 0) {
      count = arrPets.length - 1;
    }
    showCard(arrPets[count], petsContainer);
    petsContainer.style.opacity = '1';
  }, 150);

  return count;
};

nextButton.addEventListener('click', () => {
  sliderSwitcher(count++);
});

prevButton.addEventListener('click', () => {
  sliderSwitcher(count--);
});
