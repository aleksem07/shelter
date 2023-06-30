import { getDataTags } from "./local-storage";
import { Level } from "./types/types";
import { setTaksRightMenu } from "./right-menu";
import { addTagsOnTable, clearTagsOnTable } from "./get-tags";
import { enterInput } from "./send-answer";
import { getHelp } from "./help";

// page counter
const PAGE_START_COUNT = 0;

const savePageCount = (numb: number) => {
  localStorage.setItem("pageCount", `${numb}`);
};

if (!localStorage.getItem("pageCount")) {
  savePageCount(PAGE_START_COUNT);
}

let getPageCount = (function () {
  const data = localStorage.getItem("pageCount");
  return Number(data);
})();

const level = getDataTags();

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
const levelNumbs = document.querySelector(
  ".levels-header__numb"
) as HTMLElement;

const addApproved = (getPageCount: number) => {
  if (level[getPageCount].completed) {
    levelNumbs.classList.add("approved");
  } else {
    levelNumbs.classList.remove("approved");
  }
};

maxPage.textContent = `${level.length}`;
progress.setAttribute("aria-valuemax", `${level.length}`);

const fillingData = (arr: Level[]): void => {
  if (arr) {
    title.textContent = arr[getPageCount].name;
    levelDescription.innerHTML = arr[getPageCount].description;
    levelExample.innerHTML = arr[getPageCount].example;
    currentPage.textContent = `${getPageCount + 1}`;
    progress.setAttribute("aria-valuenow", `${getPageCount + 1}`);
    progressBar.style.width = `${((getPageCount + 1) / +arr.length) * 100}%`;
    // add tags on table
    addTagsOnTable(getPageCount);
    setTaksRightMenu();
    addApproved(getPageCount);
  }
};

fillingData(level);

const setNextPage = () => {
  getPageCount++;
  savePageCount(getPageCount);
  if (getPageCount > level.length - 1) {
    getPageCount = level.length - 1;
    savePageCount(getPageCount);
  }
  if (getPageCount === level.length - 1) {
    next.classList.add("disabled");
  }
  if (prev.classList.contains("disabled") && getPageCount !== 0) {
    prev.classList.remove("disabled");
  }
  clearTagsOnTable();
  fillingData(level);
  enterInput(getPageCount);
};

const setPrevPage = () => {
  getPageCount--;
  savePageCount(getPageCount);
  if (getPageCount < 0) {
    getPageCount = 0;
    savePageCount(getPageCount);
  }
  if (getPageCount === 0) {
    prev.classList.add("disabled");
  }
  if (
    next.classList.contains("disabled") &&
    getPageCount !== level.length - 1
  ) {
    next.classList.remove("disabled");
  }
  clearTagsOnTable();
  fillingData(level);
  enterInput(getPageCount);
  addApproved(getPageCount);
};

if (getPageCount >= 0 && getPageCount < level.length) {
  prev.addEventListener("click", () => {
    setPrevPage();
  });
  next.addEventListener("click", () => {
    setNextPage();
  });
}

if (
  getPageCount > 0 &&
  getPageCount < level.length &&
  prev.classList.contains("disabled")
) {
  prev.classList.remove("disabled");
}
if (
  getPageCount >= 0 &&
  getPageCount < level.length - 1 &&
  next.classList.contains("disabled")
) {
  next.classList.remove("disabled");
}

enterInput(getPageCount);
console.log(getPageCount);
getHelp(getPageCount);

export {
  fillingData,
  setTaksRightMenu,
  setNextPage,
  clearTagsOnTable,
  savePageCount,
  getPageCount,
};
