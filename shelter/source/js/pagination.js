import { removeHtmlPetsCards, showCard } from './petsCard.js';
import { shuffle } from './util.js';
import dataPets from './data.js';
const arrPets = dataPets.dataPets;

const listButtons = document.querySelector('.pets__pagination');
const button = listButtons.querySelectorAll('.pagination__link');

const BUTTONS = {
  ALL_LEFT: button[0],
  ONE_LEFT: button[1],
  ACTIVE: button[2],
  ONE_RIGHT: button[3],
  ALL_RIGHT: button[4],
};

const minPage = 1;
let maxPage = 0;
const pagesCountWidth = {
  desktop: 6,
  tablet: 8,
  mobile: 16,
};

let currentCount = minPage;

console.log(document.documentElement.clientWidth);

const disabledBtn = () => {
  if (currentCount > minPage) {
    BUTTONS.ALL_LEFT.disabled = false;
    BUTTONS.ONE_LEFT.disabled = false;
  } else {
    BUTTONS.ALL_LEFT.disabled = true;
    BUTTONS.ONE_LEFT.disabled = true;
  }
  if (currentCount >= maxPage) {
    BUTTONS.ALL_RIGHT.disabled = true;
    BUTTONS.ONE_RIGHT.disabled = true;
  } else {
    BUTTONS.ALL_RIGHT.disabled = false;
    BUTTONS.ONE_RIGHT.disabled = false;
  }
};

const showActiveBtnPage = () => {
  if (currentCount > maxPage) {
    currentCount = maxPage;
  }
  BUTTONS.ACTIVE.textContent = currentCount;
};

const petsContainer = document.querySelector('.pets__list');

button.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    if (btn === BUTTONS.ACTIVE) {
      return;
    }
    removeHtmlPetsCards();
    showCard(shuffle(arrPets), petsContainer);
    if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth > 320) {
      maxPage = pagesCountWidth.tablet;
    } else if (document.documentElement.clientWidth >= 1280) {
      maxPage = pagesCountWidth.desktop;
    } else if (document.documentElement.clientWidth <= 320) {
      maxPage = pagesCountWidth.mobile;
    }

    if (btn === BUTTONS.ALL_LEFT) {
      currentCount = minPage;
    }
    if (btn === BUTTONS.ONE_LEFT) {
      currentCount--;
    }
    if (btn === BUTTONS.ONE_RIGHT) {
      currentCount++;
    }
    if (btn === BUTTONS.ALL_RIGHT) {
      currentCount = maxPage;
    }
    showActiveBtnPage();
    disabledBtn();
  });
});
