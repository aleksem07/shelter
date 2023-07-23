import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";
import { sendRequest } from "../fetch";
import { COLORS, BRANDS, MODELS } from "../data/data";

const url = "http://localhost:3000/garage/";

async function createCar() {
  const createBtn = document.querySelector(".create-button") as HTMLElement;
  const createInput = document.querySelector(
    ".create-input"
  ) as HTMLInputElement;
  const createColor = document.querySelector(
    ".create-color"
  ) as HTMLInputElement;
  createBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    createMain.clear();
    if (createInput.value === "") {
      createInput.value = "NoName car";
    }
    const body = {
      name: createInput.value,
      color: createColor.value,
    };
    await sendRequest("POST", url, body)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    getGarageUI();
    createInput.value = "";
  });
}

const shuffle = (array: Array<string>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function generateCar() {
  const generateBtn = document.querySelector(".generate-button") as HTMLElement;
  generateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let i = 0;
    while (i < 100) {
      const shuffledColor = shuffle(COLORS);
      const shuffledBrand = shuffle(BRANDS);
      const shuffledModel = shuffle(MODELS);
      const body = {
        name: `${shuffledBrand[0]} ${shuffledModel[0]}`,
        color: shuffledColor[0],
      };
      sendRequest("POST", url, body)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      i++;
    }
    setTimeout(() => {
      createMain.clear();
      getGarageUI();
    }, 100);
  });
}
export { createCar, generateCar };
