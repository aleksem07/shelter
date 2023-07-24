import { Button, createAndAppendElement } from "../util";

const createHeader = {
  elements: {
    body: document.querySelector("body"),
    header: null as HTMLElement | null,
    button: null as HTMLElement | null,
  },

  initHeader() {
    //create header
    this.elements.header = createAndAppendElement("header", "header");

    this.elements.body?.appendChild(this.elements.header);

    //create buttons
    const garageBtn = new Button("garage", "tomato");
    const winnersBtn = new Button("winners", "lightgreen");

    this.elements.button = createAndAppendElement(
      "button",
      "button button-garage",
      garageBtn.name
    );
    this.elements.button.style.backgroundColor = garageBtn.color;
    this.elements.header.appendChild(this.elements.button);

    this.elements.button = createAndAppendElement(
      "button",
      "button button-winners",
      winnersBtn.name
    );
    this.elements.header.appendChild(this.elements.button);
    this.elements.button.style.backgroundColor = winnersBtn.color;
  },
};

export { createHeader };
