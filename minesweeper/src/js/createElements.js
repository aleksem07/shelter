const createElements = {
  tags: {
    div: document.createElement("div"),
    button: document.createElement("button"),
    ul: document.createElement("ul"),
    li: document.createElement("li"),
    span: document.createElement("span"),
    textarea: document.createElement("textarea"),
  },
  elements: {
    body: document.querySelector(".page__body"),
    mineField: null,
  },
  init() {
    this.elements.mineField = this.tags.ul.cloneNode(true);
    this.elements.mineField.classList.add("mineField");
    this.elements.body.appendChild(this.elements.mineField);
  },
};

export { createElements };
