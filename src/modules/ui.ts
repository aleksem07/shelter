class Button {
  constructor(public name: string, public color = "$back-btn--default") {
    this.name = name;
    this.color = color;
  }
}

const createHeader = {
  elements: {
    body: document.querySelector("body"),
    header: null as HTMLElement | null,
    button: null as HTMLElement | null,
  },

  createAndAppendElement(
    tag: string,
    className = "",
    textContent = ""
  ): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  },

  initHeader() {
    //create header
    this.elements.header = this.createAndAppendElement("header", "header");

    if (this.elements.body) {
      this.elements.body.appendChild(this.elements.header);
    } else {
      console.error("Could not find body");
    }

    //create buttons
    const garageBtn = new Button("garage", "tomato");
    const winnersBtn = new Button("winners");
    this.elements.button = this.createAndAppendElement(
      "button",
      "button",
      garageBtn.name
    );
    this.elements.button.style.backgroundColor = garageBtn.color;
    this.elements.header.appendChild(this.elements.button);

    this.elements.button = this.createAndAppendElement(
      "button",
      "button",
      winnersBtn.name
    );
    this.elements.header.appendChild(this.elements.button);
  },
};

createHeader.initHeader();
