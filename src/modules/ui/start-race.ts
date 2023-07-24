import { Button, createAndAppendElement } from "../util";

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
    const delAllBtn = new Button("del all data", "white");

    const btn = (btn: Button, classAdd?: string) => {
      this.elements.button = createAndAppendElement(
        "button",
        `button editor-button ${classAdd}`,
        btn.name
      );
      this.elements.button.style.backgroundColor = btn.color;
      this.elements.container?.appendChild(this.elements.button);
    };

    btn(startBtn, "start-button");
    btn(resetBtn, "reset-button");
    btn(generateBtn, "generate-button");
    btn(delAllBtn, "dont-touch");
  },
};

export { createStartButtons };
