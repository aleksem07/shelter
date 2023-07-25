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

const shuffle = (array: Array<string>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const patchEngine = async (id: number, status: string) => {
  const url = `http://localhost:3000/engine?id=${id}&status=${status}`;
  try {
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    };

    const response = await fetch(url, params);
    const data = await response.json();

    if (response.ok) {
      console.log("Success:", data);
    } else {
      throw new Error("Engine Error");
    }
  } catch (error) {
    console.log("двигатель сломался");
    throw error;
  }
};

export { Button, createAndAppendElement, shuffle, patchEngine };
