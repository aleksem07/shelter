import { getDataTags, setDataTags } from "./local-storage";
import { clearTagsOnTable } from "./getTags";
import { fillingData } from "./filling-text";
import { setTaksRightMenu, setNextPage } from "./filling-text";

const level = getDataTags();
const inputButton = document.querySelector(".task-button") as HTMLElement;

const rightAnswer = (pageCount: number) => {
  level[pageCount].completed = true;
  setDataTags(level);
  document.querySelector(".levels-header__numb")?.classList.add("approved");
  setTaksRightMenu();
  clearTagsOnTable();
  fillingData(level);
  setNextPage();
};

const getValue = (pageCount: number): boolean => {
  const input = document.getElementById("input") as HTMLInputElement;
  const taskEditor = document.querySelector(
    ".task__editor"
  ) as HTMLInputElement;
  const inputValue = input.value;
  console.log(inputValue === level[pageCount].answer);
  if (inputValue === level[pageCount].answer) {
    rightAnswer(pageCount);
    input.value = "";
    return true;
  } else {
    taskEditor.classList.add("input-error");
    setTimeout(() => {
      taskEditor.classList.remove("input-error");
    }, 250);
  }
  console.log(pageCount);
  return false;
};

const enterInput = (pageCount: number) => {
  inputButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    getValue(pageCount);
  });
};

export { enterInput };
