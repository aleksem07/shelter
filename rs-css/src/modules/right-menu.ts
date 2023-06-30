import { getDataTags } from "./local-storage";
import { clearTagsOnTable } from "./get-tags";
import { fillingData, savePageCount } from "./filling-text";

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
      li.textContent = `v ${i + 1} ${level[i].name} v`;
      levelNumbs.classList.add("approved");
    } else {
      li.textContent = `x ${i + 1} ${level[i].name} x`;
    }
    selectLevelRightMenu.appendChild(li);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const item = document.querySelectorAll(".nav-item");
  console.log(item);
  item.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      console.log(index);
      savePageCount(index);
      clearTagsOnTable();
      location.reload();
      console.log(fillingData);
    });
  });
});

export { setTaksRightMenu };
