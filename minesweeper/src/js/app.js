import { createElements } from "./createElements";
import { colorCellNumbers } from "./colored-cell-numbers";
import { startTimer } from "./timer";

createElements.init();

document.addEventListener("DOMContentLoaded", () => {
  let bombsCount = 10;
  let cellWidth = 10;
  let MAX_FIELD_SIZE = 100;
  let flags = 0;
  let cells = [];
  let gameOverStatus = false;

  createElements.panel(bombsCount);
  createElements.score();

  function createField() {
    const bombsArr = Array(bombsCount).fill("bomb");
    const emptyArr = Array(MAX_FIELD_SIZE - bombsCount).fill("free");
    const gameArr = [...emptyArr, ...bombsArr];
    let shuffledArr = gameArr.sort(() => Math.random() - 0.5);

    for (let i = 0; i < MAX_FIELD_SIZE; i++) {
      const cell = document.createElement("li");

      cell.setAttribute("id", i);
      cell.className = "cell";
      cell.classList.add(shuffledArr[i]);
      createElements.elements.mineField.appendChild(cell);
      cells.push(cell);

      //left click
      cell.addEventListener("click", function () {
        click(cell);
      });
      //right click
      cell.addEventListener("contextmenu", function (evt) {
        evt.preventDefault();
        addFlag(cell);
      });
    }

    //numb
    cells.forEach((item) => {
      let total = 0;
      const isLeft = item.id % cellWidth === 0;
      const isRight = item.id % cellWidth === cellWidth - 1;

      if (cells[item.id].classList.contains("free")) {
        //left
        if (
          item.id > 0 &&
          !isLeft &&
          cells[item.id - 1].classList.contains("bomb")
        )
          total++;
        //up-right
        if (
          item.id > 9 &&
          !isRight &&
          cells[+item.id + 1 - cellWidth].classList.contains("bomb")
        )
          total++;
        //up
        if (
          item.id > 10 &&
          cells[item.id - cellWidth].classList.contains("bomb")
        )
          total++;
        //up-left
        if (
          item.id > 11 &&
          !isLeft &&
          cells[item.id - 1 - cellWidth].classList.contains("bomb")
        )
          total++;
        // right
        if (
          item.id < 98 &&
          !isRight &&
          cells[+item.id + 1].classList.contains("bomb")
        )
          total++;
        //down-left
        if (
          item.id < 90 &&
          !isLeft &&
          cells[item.id - 1 + cellWidth].classList.contains("bomb")
        )
          total++;
        //down-right
        if (
          item.id < 88 &&
          !isRight &&
          cells[+item.id + 1 + cellWidth].classList.contains("bomb")
        )
          total++;
        // down

        if (
          item.id < 89 &&
          cells[+item.id + cellWidth].classList.contains("bomb")
        )
          total++;

        cells[item.id].setAttribute("data", total);
      }
    });
  }
  createField();

  const addFlag = (cell) => {
    console.log(flags);
    if (gameOverStatus) return;

    if (!cell.classList.contains("checked") && flags < bombsCount) {
      if (!cell.classList.contains("flag")) {
        cell.classList.add("flag");
        cell.innerHTML = "💀";
        flags++;
        createElements.elements.mineCounter.textContent--;
        if (createElements.elements.mineCounter.textContent <= 0) {
          createElements.elements.mineCounter.textContent = 0;
        }
        checkToWin();
      } else {
        cell.classList.remove("flag");
        cell.innerHTML = "";
        flags--;
        createElements.elements.mineCounter.textContent =
          +createElements.elements.mineCounter.textContent + 1;
      }
      if (flags == 10 && !gameOverStatus) {
        cell.classList.remove("flag");
        cell.innerHTML = "";
        flags--;
      }
    }
    // if (
    //   cell.classList.contains("flag") &&
    //   flags <= bombsCount &&
    //   !gameOverStatus
    // ) {
    //   cell.classList.remove("flag");
    //   cell.innerHTML = "💀";
    //   flags--;
    // }
  };

  function click(cell) {
    startTimer();
    let id = cell.id;
    if (gameOverStatus) return;
    if (cell.classList.contains("checked") || cell.classList.contains("flag"))
      return;
    if (cell.classList.contains("bomb")) {
      cell.classList.add("boom");

      cell.innerHTML = "☢️";
      gameOver();
    } else {
      if (cell.getAttribute("data") != 0) {
        colorCellNumbers(cell);
      }
      if (cell.getAttribute("data") == 0) {
        checkCell(id);
      }
    }
    cell.classList.add("checked");
    cell.style.cursor = "default";
  }

  const checkCell = (id) => {
    const isLeft = id % cellWidth === 0;
    const isRight = id % cellWidth === cellWidth - 1;

    const newCell = (id) => {
      const newCell = document.getElementById(id);
      click(newCell);
    };

    setTimeout(() => {
      if (id > 0 && !isLeft) {
        const newId = cells[+id - 1].id;
        newCell(newId);
      }
      if (id > 9 && !isRight) {
        const newId = cells[+id + 1 - cellWidth].id;
        newCell(newId);
      }
      if (id > 10) {
        const newId = cells[+id - cellWidth].id;
        newCell(newId);
      }
      if (id > 11 && !isLeft) {
        const newId = cells[+id - 1 - cellWidth].id;
        newCell(newId);
      }
      if (id < 98 && !isRight) {
        const newId = cells[+id + 1].id;
        newCell(newId);
      }
      if (id < 90 && !isLeft) {
        const newId = cells[+id - 1 + cellWidth].id;
        newCell(newId);
      }
      if (id < 88 && !isRight) {
        const newId = cells[+id + 1 + cellWidth].id;
        newCell(newId);
      }
      if (id < 89) {
        const newId = cells[+id + cellWidth].id;
        newCell(newId);
      }
    }, 10);
  };

  const gameOver = () => {
    cells.forEach((cell) => {
      if (cell.classList.contains("bomb")) {
        cell.innerHTML = "☢️";
      }
    });
    gameOverStatus = true;
  };

  const checkToWin = () => {
    let moves = 0;
    for (let i = 0; i < cells.length; i++) {
      if (
        cells[i].classList.contains("flag") &&
        cells[i].classList.contains("bomb")
      ) {
        moves++;
      }
      if (moves === bombsCount) {
        console.log("win");
        gameOverStatus = true;
      }
    }
  };
});
