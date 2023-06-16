import { level } from "./data/data";

const title = document.querySelector(".task__title") as HTMLElement;
const prev = document.querySelector(".levels-header__prev");
const next = document.querySelector(".levels-header__next");
const currentPage = document.querySelector(".current-page") as HTMLElement;
const maxPage = document.querySelector(".max-page") as HTMLElement;
const progress = document.querySelector(".progress") as HTMLElement;
const progressBar = document.querySelector(".progress-bar") as HTMLElement;
const levelDescription = document.querySelector(
  ".levels__description"
) as HTMLElement;
const levelExample = document.querySelector(".levels__examples") as HTMLElement;

let pageCount = 0;

maxPage.textContent = `${level.length}`;
progress.setAttribute("aria-valuemax", `${level.length}`);

if (pageCount >= 0 && pageCount < level.length) {
  prev?.addEventListener("click", () => {
    pageCount--;
    if (pageCount < 0) {
      pageCount = 0;
    }

    title.textContent = level[pageCount].name;
    levelDescription.textContent = level[pageCount].description;
    levelExample.textContent = level[pageCount].example;
    currentPage.textContent = `${pageCount + 1}`;
    progress?.setAttribute("aria-valuenow", `${pageCount + 1}`);
    progressBar.style.width = `${((pageCount + 1) / +level.length) * 100}%`;
  });
  next?.addEventListener("click", () => {
    pageCount++;
    if (pageCount > level.length - 1) {
      pageCount = level.length - 1;
    }
    title.textContent = level[pageCount].name;
    levelDescription.textContent = level[pageCount].description;
    levelExample.textContent = level[pageCount].example;
    currentPage.textContent = `${pageCount + 1}`;
    progress.setAttribute("aria-valuenow", `${pageCount + 1}`);
    progressBar.style.width = `${((pageCount + 1) / +level.length) * 100}%`;
  });
}
