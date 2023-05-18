const colorCellNumbers = (cell) => {
  if (cell.getAttribute("data") != 0) {
    cell.textContent = cell.getAttribute("data");
    if (cell.textContent == 1) {
      cell.style.color = "blue";
    }
    if (cell.textContent == 2) {
      cell.style.color = "green";
    }
    if (cell.textContent == 3) {
      cell.style.color = "red";
    }
    if (cell.textContent == 5) {
      cell.style.color = "tomato";
    }
    if (cell.textContent == 6) {
      cell.style.color = "cyan";
    }
  }
};

const themeSwitcher = () => {
  const buttonThemeFirst = document.querySelector(".add-panel__themeFirst");
  const buttonThemeSecond = document.querySelector(".add-panel__themeSecond");
  const body = document.querySelector(".page__body");
  console.log(buttonThemeSecond);

  buttonThemeFirst.addEventListener("click", () => {
    body.style.filter = "none";
  });
  buttonThemeSecond.addEventListener("click", () => {
    body.style.filter = "invert(1)";
  });
};

export { colorCellNumbers, themeSwitcher };
