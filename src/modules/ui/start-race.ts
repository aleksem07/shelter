import { Button, createAndAppendElement } from "./util";

const createStartButtons = {
  elements: {
    main: null as HTMLElement | null,
    container: null as HTMLElement | null,
    div: null as HTMLElement | null,
    button: null as HTMLElement | null,
    input: null as HTMLInputElement | null,
  },

  init() {
    this.elements.main = document.querySelector("main");
    this.elements.container = createAndAppendElement("div", "container");
    if (this.elements.main) {
      this.elements.main.appendChild(this.elements.container);
    } else {
      console.error("Not find <main></main>");
    }
  },

  createButtons() {
    const startBtn = new Button("start", "yellow");
    const resetBtn = new Button("reset", "red");
    const generateBtn = new Button("generate");

    const btn = (btn: Button) => {
      this.elements.button = createAndAppendElement(
        "button",
        `button editor-button start-button`,
        btn.name
      );
      this.elements.button.style.backgroundColor = btn.color;
      this.elements.container?.appendChild(this.elements.button);
    };

    btn(startBtn);
    btn(resetBtn);
    btn(generateBtn);
  },
};

export { createStartButtons };
