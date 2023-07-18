import { createHeader } from "./ui/header";
import { createMain } from "./ui/main";
import { createEditor } from "./ui/create-car";
import { createStartButtons } from "./ui/start-race";
import "./page-switcher";
import "./ui/car";
import "./local-storage";
import { pageUi } from "./type";
import { page } from "./local-storage";

const currentPage: pageUi[] = [];

const getGarageUI = () => {
  createMain.initGarage();
  createEditor.initEditor();
  createEditor.createEditorButton("create");
  createEditor.createEditorButton("update");
  createStartButtons.init();
  createStartButtons.createButtons();
};
const getWinnersUI = () => {
  createMain.initWinners();
};
currentPage.push(getGarageUI);
currentPage.push(getWinnersUI);

function app() {
  createHeader.initHeader();
  createMain.initMain();
  currentPage[page.page]();
}
app();

export { getGarageUI, getWinnersUI };
