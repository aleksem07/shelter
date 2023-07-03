document.addEventListener("DOMContentLoaded", () => {
  const getTagsOnTable = document.querySelectorAll(".task__table div");
  const htmlCode = document.querySelector("code") as HTMLElement;

  getTagsOnTable.forEach((i, index) => {
    i.addEventListener("mouseover", () => {
      i.classList.add("mouseover");
      if (htmlCode?.children.length > 1) {
        htmlCode?.children[index - 1].classList.add("mouseover");
      }
    });
    i.addEventListener("mouseout", () => {
      i.classList.remove("mouseover");
      if (htmlCode?.children.length > 1) {
        htmlCode?.children[index - 1].classList.remove("mouseover");
      }
    });
  });
});
