import { createHeader } from "./ui/header";
import { createMain } from "./ui/main";
import { createEditor } from "./ui/create-car-input";
import { createStartButtons } from "./ui/start-race";
import "./ui/car";
import "./page-switcher";
import "./local-storage";
import { pageUi } from "./type";
import { page } from "./local-storage";
import { getCars } from "./ui/car";

//edit
import "./fetch";
import { createCar, generateCar } from "./edit/create";
import { clearGarage, clearCar } from "./edit/delete";
import { startAndStopOneCar, stopAllCar, startAllCar } from "./edit/start-stop";
import { selectCar, updateCar } from "./edit/select";
//winners
import { createWinner, getWinners } from "./ui/winners";

const currentPage: pageUi[] = [];
let carPageCount = 1;
const winnerPageCount = 1;
const pageSwitcher = () => {
  const body = document.querySelector("body");
  const buttonNext = document.querySelector(".button-next");
  buttonNext?.addEventListener("click", async () => {
    carPageCount++;
    if (body) {
      body.innerHTML = "";
    }
    createHeader.initHeader();
    createMain.initMain();
    await currentPage[page.page]();
  });

  const buttonPrev = document.querySelector(".button-prev");
  buttonPrev?.addEventListener("click", async () => {
    carPageCount <= 1 ? (carPageCount = 1) : carPageCount--;
    if (body) {
      body.innerHTML = "";
    }
    createHeader.initHeader();
    createMain.initMain();
    await currentPage[page.page]();
  });
};

const getGarageUI = async () => {
  await createMain.initGarage(carPageCount);
  createEditor.initEditor();
  await createEditor.createEditorButton("create");
  createEditor.createEditorButton("update");
  createStartButtons.init();
  createStartButtons.createButtons();
  await getCars(carPageCount);
  createCar();
  generateCar();
  clearGarage();
  clearCar();
  startAndStopOneCar();
  selectCar();
  updateCar();
  stopAllCar();
  startAllCar();
  pageSwitcher();
};

const getWinnersUI = async () => {
  await createMain.initWinners();
  createWinner.init(`Number`, `Car`, `Name`, `Wins`, `Best Time`);
  getWinners(winnerPageCount);
};

currentPage.push(getGarageUI);
currentPage.push(getWinnersUI);

async function app() {
  createHeader.initHeader();
  createMain.initMain();
  await currentPage[page.page]();
}
app();

export { getGarageUI, getWinnersUI };
