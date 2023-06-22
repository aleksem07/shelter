import { Level } from "./types/types";
import { level } from "./data/data";
import { addTagsOnTable, clearTagsOnTable } from "./getTags";

let pageCount = 0;

// ToDo save page count
// localStorage.setItem("data", JSON.stringify(level[0]));
// const savedData: string | null = localStorage.getItem("data");

// const getLocalData = (() => {
//   if (savedData) {
//     const data: Level[] = JSON.parse(savedData);
//     return data;
//   }
// })();
// if (getLocalData) {
//   console.log(getLocalData[0]);
// }

const title = document.querySelector(".task__title") as HTMLElement;
const prev = document.querySelector(".levels-header__prev") as HTMLElement;
const next = document.querySelector(".levels-header__next") as HTMLElement;
const currentPage = document.querySelector(".current-page") as HTMLElement;
const maxPage = document.querySelector(".max-page") as HTMLElement;
const progress = document.querySelector(".progress") as HTMLElement;
const progressBar = document.querySelector(".progress-bar") as HTMLElement;
const levelDescription = document.querySelector(
  ".levels__description"
) as HTMLElement;
const levelExample = document.querySelector(".levels__examples") as HTMLElement;

const selectLevelRightMenu = document.querySelector(
  ".navbar-nav"
) as HTMLElement;

const setTaksRightMenu = () => {
  selectLevelRightMenu.innerHTML = "";
  for (let i = 0; i < level.length; i++) {
    const li = document.createElement("li");
    li.className = "nav-item";
    if (level[i].completed) {
      li.textContent = `v ${i} ${level[i].name}`;
    } else {
      li.textContent = `x ${i} ${level[i].name}`;
    }
    selectLevelRightMenu.appendChild(li);
  }
};
setTaksRightMenu();

maxPage.textContent = `${level.length}`;
progress.setAttribute("aria-valuemax", `${level.length}`);

const fillingData = (arr: Level[]) => {
  if (arr) {
    title.textContent = arr[pageCount].name;
    levelDescription.textContent = arr[pageCount].description;
    levelExample.textContent = arr[pageCount].example;
    currentPage.textContent = `${pageCount + 1}`;
    progress.setAttribute("aria-valuenow", `${pageCount + 1}`);
    progressBar.style.width = `${((pageCount + 1) / +arr.length) * 100}%`;
    // add tags on table
    addTagsOnTable(pageCount);
  }
};

fillingData(level);

if (pageCount >= 0 && pageCount < level.length) {
  prev.addEventListener("click", () => {
    pageCount--;
    if (pageCount < 0) {
      pageCount = 0;
    }
    clearTagsOnTable();
    fillingData(level);
  });
  next.addEventListener("click", () => {
    pageCount++;
    if (pageCount > level.length - 1) {
      pageCount = level.length - 1;
    }
    clearTagsOnTable();
    fillingData(level);
  });
}

console.log(level[0].board[0]);
