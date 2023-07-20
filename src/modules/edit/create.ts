import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";
import { sendRequest } from "../fetch";

const url = "http://localhost:3000/garage/";

const createCar = () => {
  const createBtn = document.querySelector(
    ".create-button"
  ) as HTMLInputElement;
  const createInput = document.querySelector(
    ".create-input"
  ) as HTMLInputElement;
  const createColor = document.querySelector(
    ".create-color"
  ) as HTMLInputElement;
  if (createBtn) {
    console.log("ok");
  } else {
    console.error("not find createBtn");
  }
  createBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (createInput.value === "") {
      createInput.value = "NoName car";
    }
    const body = {
      name: createInput.value,
      color: createColor.value,
    };

    sendRequest("POST", url, body)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    createMain.clear();
    getGarageUI();

    createInput.value = "";
  });
};

export { createCar };
