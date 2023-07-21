import { deleteCar, deleteAllCar } from "../fetch";
import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";

function clearCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    if (targetElement.classList.contains("remove-button")) {
      await deleteCar(Number(parenElement.getAttribute("id")));
      location.reload();
    }
  });
}

async function clearGarage() {
  const dontTouch = document.querySelector(".dont-touch") as HTMLElement;

  dontTouch.addEventListener("click", async (evt) => {
    evt.preventDefault();
    await deleteAllCar();
    setTimeout(() => {
      createMain.clear();
      getGarageUI();
    }, 100);
  });
}

export { clearGarage, clearCar };
