class Button {
  constructor(public name: string, public color = "$back-btn--default") {
    this.name = name;
    this.color = color;
  }
}

const createAndAppendElement = function (
  tag: string,
  className?: string,
  textContent?: string
): HTMLElement {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent.toUpperCase();
  return element;
};

export { Button, createAndAppendElement };
