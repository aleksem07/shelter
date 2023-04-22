console.log("print");

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".screen__cursor");

for (let button of buttons) {
  button.onclick = function () {
    let char = button.textContent;
    let displayText = display.textContent;
    displayText = displayText + char;
    display.textContent = displayText;
  };
}

document.addEventListener("keydown", (evt) => {
  let char = evt.key;
  let displayText = display.textContent;
  displayText = displayText + char;
  display.textContent = displayText;
  console.log(evt);
  console.log(char);
  for (let button of buttons) {
    console.log(button.lastChild.textContent);
    if (evt.key === button.lastChild.textContent) {
      button.style.background = "tomato";
      button.style.boxShadow = "inset -1px -1px 5px 0 #3a3a3a";
    }
  }
});

document.addEventListener("keyup", (evt) => {
  for (let button of buttons) {
    if (evt.key === button.lastChild.textContent) {
      button.style.background = "#3a3a3a";
      button.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
  }
});
