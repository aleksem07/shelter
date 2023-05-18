const createElements = {
  tags: {
    div: document.createElement("div"),
    select: document.createElement("select"),
    option: document.createElement("option"),
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
    addPanel: null,
    mineCounter: null,
    moveCounter: null,
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
  panel(mineCount, moveCount) {
    this.elements.panel = this.tags.div.cloneNode(true);
    this.elements.panel.classList.add("panel");
    this.elements.body.appendChild(this.elements.panel);

    this.elements.smileStatus = this.tags.div.cloneNode(true);
    this.elements.smileStatus.innerHTML = "New game";
    this.elements.smileStatus.classList.add("panel__new-game");
    this.elements.panel.appendChild(this.elements.smileStatus);

    this.elements.mineCounter = this.tags.div.cloneNode(true);
    this.elements.mineCounter.classList.add("panel__mine-counter");
    this.elements.mineCounter.textContent = mineCount;
    this.elements.panel.appendChild(this.elements.mineCounter);

    this.elements.moveCounter = this.tags.div.cloneNode(true);
    this.elements.moveCounter.classList.add("panel__move-counter");
    this.elements.moveCounter.textContent = moveCount;
    this.elements.panel.appendChild(this.elements.moveCounter);

    this.elements.timer = this.tags.div.cloneNode(true);
    this.elements.timer.classList.add("panel__time");
    this.elements.timer.textContent = "0:00";
    this.elements.panel.appendChild(this.elements.timer);
  },
  addPanel() {
    this.elements.addPanel = this.tags.div.cloneNode(true);
    this.elements.addPanel.classList.add("add-panel");
    this.elements.body.appendChild(this.elements.addPanel);

    this.elements.sound = this.tags.div.cloneNode(true);
    this.elements.sound.innerHTML = "🔇 🔊";
    this.elements.sound.classList.add("add-panel__sound");
    this.elements.addPanel.appendChild(this.elements.sound);

    this.elements.gameDiffSelect = this.tags.select.cloneNode(true);
    this.elements.gameDiffSelectEasy = this.tags.option.cloneNode(true);
    this.elements.gameDiffSelectEasy.textContent = "Easy";
    this.elements.gameDiffSelectNormal = this.tags.option.cloneNode(true);
    this.elements.gameDiffSelectNormal.textContent = "Normal";
    this.elements.gameDiffSelectHard = this.tags.option.cloneNode(true);
    this.elements.gameDiffSelectHard.textContent = "Hard";
    this.elements.gameDiffSelect.classList.add("add-panel__game-diff");
    this.elements.addPanel.appendChild(this.elements.gameDiffSelect);
    this.elements.gameDiffSelect.appendChild(this.elements.gameDiffSelectEasy);
    this.elements.gameDiffSelect.appendChild(
      this.elements.gameDiffSelectNormal
    );
    this.elements.gameDiffSelect.appendChild(this.elements.gameDiffSelectHard);

    this.elements.theme = this.tags.div.cloneNode(true);
    this.elements.themeFirst = this.tags.div.cloneNode(true);
    this.elements.themeSecond = this.tags.div.cloneNode(true);

    this.elements.themeFirst.innerHTML = "color1";
    this.elements.themeSecond.innerHTML = "color2";
    this.elements.theme.classList.add("add-panel__theme");
    this.elements.themeFirst.classList.add("add-panel__themeFirst");
    this.elements.themeSecond.classList.add("add-panel__themeSecond");
    this.elements.addPanel.appendChild(this.elements.theme);
    this.elements.theme.appendChild(this.elements.themeFirst);
    this.elements.theme.appendChild(this.elements.themeSecond);
  },
  score() {
    const maxWinCount = 10;
    this.elements.score = this.tags.div.cloneNode(true);
    this.elements.score.classList.add("score");
    this.elements.body.appendChild(this.elements.score);

    this.elements.winList = this.tags.ol.cloneNode(true);
    this.elements.winList.classList.add("score__win-list");
    this.elements.score.appendChild(this.elements.winList);

    this.elements.winListBackground = this.tags.div.cloneNode(true);
    this.elements.winListBackground.classList.add("score__background");
    this.elements.score.appendChild(this.elements.winListBackground);

    for (let i = 0; i < maxWinCount; i++) {
      this.elements.winItem = this.tags.li.cloneNode(true);
      this.elements.winItem.classList.add("score__win-item");
      this.elements.winItem.textContent = `${i + 1}.`;
      this.elements.winList.appendChild(this.elements.winItem);
    }
  },
};

export { createElements };
