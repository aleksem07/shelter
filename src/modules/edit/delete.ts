import {
  deleteCar,
  deleteAllCar,
  url,
  urlWinners,
  getRequest,
  sendRequest,
} from "../fetch";
import { createMain } from "./../ui/main";
import { getGarageUI } from "./../app";
import { WinnerCar } from "../type";

function clearCar() {
  document.addEventListener("click", async (evt) => {
    const targetElement = evt.target as HTMLElement;
    const parenElement = targetElement.parentNode as HTMLElement;
    if (targetElement.classList.contains("remove-button")) {
      const name = parenElement.querySelector(".car-name")?.textContent;

      await deleteCar(Number(parenElement.getAttribute("id")), url);

      const getData: WinnerCar[] = await getRequest("GET", urlWinners);
      const existingWinnerName = getData.findIndex(
        (item) => item.name === name
      );
      if (existingWinnerName !== -1) {
        const existingWinner = getData[existingWinnerName];
        const id = existingWinner.id;

        const updateData = await sendRequest(
          "DELETE",
          urlWinners + id,
          existingWinner
        );
        console.log("Record deleted:", updateData);
      }

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
