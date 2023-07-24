import { deleteCar, deleteAllCar, url, urlWinners } from "../fetch";
import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";

function clearCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    if (targetElement.classList.contains("remove-button")) {
      await deleteCar(Number(parenElement.getAttribute("id")), url);
      await deleteCar(Number(parenElement.getAttribute("id")), urlWinners);
      location.reload();
    }
  });
}

async function clearGarage() {
  const dontTouch = document.querySelector(".dont-touch") as HTMLElement;

  dontTouch.addEventListener("click", async (evt) => {
    evt.preventDefault();
    await deleteAllCar(url);
    await deleteAllCar(urlWinners);
    setTimeout(() => {
      localStorage.setItem("currentCarPage", "1");
      createMain.clear();
      getGarageUI();
    }, 100);
  });
}

export { clearGarage, clearCar };
