import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";
import { sendRequest } from "../fetch";

const selectCar = () => {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parentElement = targetElement.parentNode as HTMLElement;
    const carName = parentElement.querySelector(".car-name") as HTMLElement;
    const updateInput = document.querySelector(
      ".update-input"
    ) as HTMLInputElement;
    const id = Number(parentElement.getAttribute("id"));
    if (targetElement.classList.contains("select-button")) {
      updateInput.setAttribute("id", id.toString());
      updateInput.value = `${carName.textContent?.slice(0, -3)}`;
    }
  });
};

const url = "http://localhost:3000/garage/";

async function updateCar() {
  const updateBtn = document.querySelector(".update-button") as HTMLElement;
  const updateInput = document.querySelector(
    ".update-input"
  ) as HTMLInputElement;
  const updateColor = document.querySelector(
    ".update-color"
  ) as HTMLInputElement;

  updateBtn.addEventListener("click", async (evt) => {
    const id = Number(updateInput.getAttribute("id"));
    evt.preventDefault();
    if (updateInput.value === "") {
      console.log("Please, choose a car");
    } else {
      createMain.clear();
      const body = {
        name: updateInput.value,
        color: updateColor.value,
      };
      await sendRequest("PATCH", url + id, body)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      getGarageUI();
      updateInput.value = "";
    }
  });
}

export { selectCar, updateCar };
