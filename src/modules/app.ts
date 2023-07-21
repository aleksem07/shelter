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
import { createCar } from "./edit/create";
import "./edit/delete";

const currentPage: pageUi[] = [];

async function getGarageUI() {
  createMain.initGarage();
  createEditor.initEditor();
  createEditor.createEditorButton("create");
  createEditor.createEditorButton("update");
  createStartButtons.init();
  createStartButtons.createButtons();
  await getCars();
  createCar();
}

const getWinnersUI = () => {
  createMain.initWinners();
};

currentPage.push(getGarageUI);
currentPage.push(getWinnersUI);

async function app() {
  createHeader.initHeader();
  await createMain.initMain();
  currentPage[page.page]();
}
app();

export { getGarageUI, getWinnersUI };
