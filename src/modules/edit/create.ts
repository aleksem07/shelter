import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";
import { sendRequest } from "../fetch";

const url = "http://localhost:3000/garage/";

async function createCar() {
  const createBtn = document.querySelector(".create-button") as HTMLElement;
  const createInput = document.querySelector(
    ".create-input"
  ) as HTMLInputElement;
  const createColor = document.querySelector(
    ".create-color"
  ) as HTMLInputElement;
  const generateBtn = document.querySelector(".generate-button") as HTMLElement;
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
  generateBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    createMain.clear();
    createInput.value = "NoName car1";
    const body = {
      name: createInput.value,
      color: (createColor.value = "f01"),
    };
    await sendRequest("POST", url, body)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    getGarageUI();
  });
}

export { createCar };
