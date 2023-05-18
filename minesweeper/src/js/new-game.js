import { createElements } from "./createElements";
const newGame = (addNewField) => {
  const newGameButton = document.querySelector(".panel__new-game");
  const field = document.querySelector(".mine-field");

  newGameButton.addEventListener("click", () => {
    field.remove();
    createElements.init();
    addNewField;
  });
};

export { newGame };
