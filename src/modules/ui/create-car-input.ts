import { Button, createAndAppendElement } from "./util";

const createEditor = {
  elements: {
    main: null as HTMLElement | null,
    container: null as HTMLElement | null,
    div: null as HTMLElement | null,
    button: null as HTMLElement | null,
    input: null as HTMLInputElement | null,
  },

  initEditor() {
    this.elements.main = document.querySelector("main");
  },

  createEditorButton(name: string) {
    const createBtn = new Button(name);

    this.elements.container = createAndAppendElement("div", "container");
    if (this.elements.main) {
      this.elements.main.appendChild(this.elements.container);
    } else {
      console.error("Not find <main></main>");
    }

    this.elements.input = createAndAppendElement(
      "input",
      `${name}-input`
    ) as HTMLInputElement;
    this.elements.input.placeholder = "name and model";
    this.elements.container?.appendChild(this.elements.input);

    this.elements.input = createAndAppendElement(
      "input",
      `${name}-color`
    ) as HTMLInputElement;
    this.elements.input.type = "color";
    this.elements.container.appendChild(this.elements.input);

    this.elements.button = createAndAppendElement(
      "button",
      `button editor-button ${name}-button`,
      createBtn.name
    );
    this.elements.container.appendChild(this.elements.button);
  },
};

export { createEditor };
