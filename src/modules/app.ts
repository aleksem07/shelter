import { createHeader } from "./ui/header";
import { createMain } from "./ui/main";
import { createEditor } from "./ui/create-car";
import "./page-switcher";
import "./ui/start-race";
import { createStartButtons } from "./ui/start-race";

function app() {
  createHeader.initHeader();
  createMain.initMain();
  createMain.initGarage();
  createEditor.initEditor();
  createEditor.createEditorButton("create");
  createEditor.createEditorButton("update");
  createStartButtons.init();
  createStartButtons.createButtons();
}
app();
