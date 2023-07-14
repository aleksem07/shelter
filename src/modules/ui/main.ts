import { createAndAppendElement } from "./util";

const createMain = {
  elements: {
    body: document.querySelector("body"),
    main: null as HTMLElement | null,
    button: null as HTMLElement | null,
    h1: null as HTMLElement | null,
    div: null as HTMLElement | null,
    p: null as HTMLElement | null,
  },

  initMain() {
    this.elements.main = createAndAppendElement("main", "main");
    this.elements.body?.appendChild(this.elements.main);
  },

  initGarage() {
    //name
    this.elements.h1 = createAndAppendElement("h1", "garage-title");
    this.elements.h1.textContent = "My Garage";
    this.elements.main?.appendChild(this.elements.h1);

    //container car/page counter
    this.elements.div = createAndAppendElement(
      "div",
      "garage-counter-container"
    );
    this.elements.main?.appendChild(this.elements.div);
    //page numb
    this.elements.p = createAndAppendElement("p", "page-number");
    this.elements.p.textContent = "Page number 1";
    this.elements.div?.appendChild(this.elements.p);
    //all count car in base
    this.elements.p = createAndAppendElement("p", "database");
    this.elements.p.textContent = "Database 1";
    this.elements.div?.appendChild(this.elements.p);
  },

  clear() {
    if (this.elements.main) {
      this.elements.main.innerHTML = "";
    }
  },
};

createMain.initMain();
createMain.initGarage();
