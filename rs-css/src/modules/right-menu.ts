import { getDataTags } from "./local-storage";
import { clearTagsOnTable } from "./get-tags";
import { savePageCount } from "./filling-text";
import { getPageCount } from "./filling-text";

const selectLevelRightMenu = document.querySelector(
  ".navbar-nav"
) as HTMLElement;
const levelNumbs = document.querySelector(
  ".levels-header__numb"
) as HTMLElement;

const level = getDataTags();

const setTaksRightMenu = () => {
  selectLevelRightMenu.innerHTML = "";
  for (let i = 0; i < level.length; i++) {
    const li = document.createElement("li");
    li.className = "nav-item";
    if (level[i].completed) {
      if (level[i].help) {
        li.textContent = `help! v ${i + 1} ${level[i].name} v`;
      } else {
        li.textContent = `v ${i + 1} ${level[i].name} v`;
      }
      levelNumbs.classList.add("approved");
    } else {
      if (level[i].help) {
        li.textContent = `help! x ${i + 1} ${level[i].name} x`;
      } else {
        li.textContent = `x ${i + 1} ${level[i].name} x`;
      }
    }
    selectLevelRightMenu.appendChild(li);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const item = document.querySelectorAll(".nav-item");
  console.log(item);
  item.forEach((navItem, index) => {
    if (navItem.classList.contains("current")) {
      navItem.classList.remove("current");
    }
    navItem.addEventListener("click", () => {
      savePageCount(index);
      clearTagsOnTable();
      location.reload();
    });
  });

  const flashCurrenLevel = () => {
    item[getPageCount].classList.add("current");
  };

  flashCurrenLevel();
});

const resetButton = document.getElementById("reset");

console.log(resetButton);
resetButton?.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

export { setTaksRightMenu };
