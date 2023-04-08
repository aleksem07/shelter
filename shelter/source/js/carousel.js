import { removeHtmlPetsCards, showCard } from './petsCard.js';
import dataPets from './data.js';

const arrPets = dataPets.dataPets;

const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.pets-slider__arrow--right');
const prevButton = document.querySelector('.pets-slider__arrow--left');

const stepShift = -137;

nextButton.addEventListener('click', () => {
  carousel.style.transform = `translateX(${stepShift}px)`;
});
prevButton.addEventListener('click', () => {
  carousel.style.transform = `translateX(${612}px)`;
});

const petsContainer = document.querySelector('.carousel');
removeHtmlPetsCards();
showCard(arrPets, petsContainer);
