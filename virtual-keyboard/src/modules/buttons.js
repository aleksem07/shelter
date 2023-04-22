import { buttonsEn } from "./data/buttons-data.js";

const keyboard = document.querySelector(".keyboard");

const createButtons = () => {
  for (let button of buttonsEn) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const spanAdd = span.cloneNode(true);
    const spanName = span.cloneNode(true);
    spanAdd.textContent = button.add;
    spanName.textContent = button.key;
    spanAdd.className = "button-second";
    spanName.className = "button-first";

    li.className = `button ${button.size}`;
    keyboard.appendChild(li);
    li.appendChild(spanAdd);
    li.appendChild(spanName);
  }
};

createButtons();

console.log(navigator.language);
