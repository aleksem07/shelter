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

const currentPage: pageUi[] = [];
const carPageCount = 1;

async function getGarageUI() {
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
}

const getWinnersUI = () => {
  createMain.initWinners();
};

currentPage.push(getGarageUI);
currentPage.push(getWinnersUI);

async function app() {
  createHeader.initHeader();
  createMain.initMain();
  currentPage[page.page]();
}
app();

export { getGarageUI, getWinnersUI };
