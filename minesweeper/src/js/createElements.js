const createElements = {
  tags: {
    div: document.createElement("div"),
    button: document.createElement("button"),
    ul: document.createElement("ul"),
    ol: document.createElement("ol"),
    li: document.createElement("li"),
    p: document.createElement("p"),
    span: document.createElement("span"),
    textarea: document.createElement("textarea"),
  },
  elements: {
    body: document.querySelector(".page__body"),
    mineField: null,
    panel: null,
    mineCounter: null,
    smileStatus: null,
    timer: null,
    score: null,
    winList: null,
    winItem: null,
  },
  init() {
    this.elements.mineField = this.tags.ul.cloneNode(true);
    this.elements.mineField.classList.add("mine-field");
    this.elements.body.appendChild(this.elements.mineField);
  },
  panel(mineCount) {
    this.elements.panel = this.tags.div.cloneNode(true);
    this.elements.panel.classList.add("panel");
    this.elements.body.appendChild(this.elements.panel);

    this.elements.mineCounter = this.tags.div.cloneNode(true);
    this.elements.mineCounter.classList.add("panel__mine-counter");
    this.elements.mineCounter.textContent = mineCount;
    this.elements.panel.appendChild(this.elements.mineCounter);

    this.elements.smileStatus = this.tags.div.cloneNode(true);
    this.elements.smileStatus.classList.add("panel__smile-status");
    this.elements.panel.appendChild(this.elements.smileStatus);

    this.elements.timer = this.tags.div.cloneNode(true);
    this.elements.timer.classList.add("panel__time");
    this.elements.timer.textContent = "0:00";
    this.elements.panel.appendChild(this.elements.timer);
  },
  score() {
    const maxWinCount = 10;
    this.elements.score = this.tags.div.cloneNode(true);
    this.elements.score.classList.add("score");
    this.elements.body.appendChild(this.elements.score);

    this.elements.winList = this.tags.ol.cloneNode(true);
    this.elements.winList.classList.add("score__win-list");
    this.elements.score.appendChild(this.elements.winList);

    for (let i = 0; i < maxWinCount; i++) {
      this.elements.winItem = this.tags.li.cloneNode(true);
      this.elements.winItem.classList.add("score__win-item");
      this.elements.winItem.textContent = `${i + 1}.`;
      this.elements.winList.appendChild(this.elements.winItem);
    }
  },
};

export { createElements };
