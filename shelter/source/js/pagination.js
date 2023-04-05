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
const maxPage = 4;
let currentCount = minPage;

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

const activeBtnPage = () => {
  BUTTONS.ACTIVE.textContent = currentCount;
};

button.forEach((btn, i) => {
  btn.addEventListener('click', () => {
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

    activeBtnPage();
    disabledBtn();
  });
});
