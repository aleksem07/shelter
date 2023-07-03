import { Level } from "../types/types";

const level: Level[] = [
  {
    name: "Select the circle",
    answer: "circle",
    animation: "circle",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>div</strong> selects all <tag>div</tag> elements.",
    htmlViewer: `
    <circle></circle>
    <circle></circle>
    `,
    completed: false,
    help: false,
    board: ["circle", "circle"],
  },
  {
    name: "Select elements by their type",
    answer: "square",
    animation: "square",
    description:
      "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    example: "<strong>p</strong> selects all <tag>p</tag> elements.",
    htmlViewer: `
        <square></square>
        <circle></circle>
        <square></square>
        `,
    completed: false,
    help: false,
    board: ["square", "circle", "square"],
  },
  {
    name: "Select the id",
    answer: "#circle",
    animation: "circle-id",
    description:
      "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    example:
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
    htmlViewer: `
    <square id="fancy"/>
    <circle/>
    <square/>
    `,
    completed: false,
    help: false,
    board: ["circle-id", "circle", "square"],
  },
  {
    name: "Select an element inside another element",
    answer: "circle circle-small",
    animation: "circle-smallincircle",
    description:
      "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    example:
      "<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",
    htmlViewer: `
    <square/>
    <circle>
      <circle-small/>
    </circle>
    <circle-small/>
    `,
    completed: false,
    help: false,
    board: ["square", "circle", "circle-smallincircle", "circle-small"],
  },
  {
    name: "Nth Child Pseudo-selector",
    answer: ":nth-child(3)",
    animation: "circle-anima",
    description:
      "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    example:
      "<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.",
    htmlViewer: `
    <circle/>
    <circle/>
    <circle/>
    <circle id="fancy"/>
    `,
    completed: false,
    help: false,
    board: ["circle", "circle", "circle circle-anima", "circle-id"],
  },
  {
    name: "First of Type Selector",
    answer: "apple:first-of-type",
    animation: "circle-anima",
    description:
      "Selects the first element of that type within another element.",
    example:
      "<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.",
    htmlViewer: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `,
    completed: false,
    help: false,
    board: [
      "circle small",
      "circle circle-anima",
      "circle small",
      "circle",
      "circle small",
    ],
  },
  {
    name: "Nth of Type Selector",
    answer: ":nth-of-type(A)",
    animation: "circle-anima",
    description:
      "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    example:
      "<strong>div:nth-of-type(2)</strong> selects the second instance of a div.",
    htmlViewer: `
    <circle/>
    <circle/>
    <circle/>
    <circle/>
    <circle id="fancy"/>
    <circle/>
    `,
    completed: false,
    help: false,
    board: [
      "circle ",
      "circle circle-anima",
      "circle ",
      "circle circle-anima",
      "circle-id ",
      "circle circle-anima",
    ],
  },
  {
    name: "Empty Selector",
    answer: "bento:empty",
    animation: "square-anima",
    description:
      "Selects elements that don't have any other elements inside of them.",
    example:
      "<strong>div:empty</strong> selects all empty <tag>div</tag> elements.",
    htmlViewer: `
    <square/>
    <square>
      <circle-small/>
    </square>
    <square/>
    `,
    completed: false,
    help: false,
    board: [
      "square square-anima",
      "square",
      "circle-smallincircle",
      "square square-anima",
    ],
  },
  {
    name: "First of Type Selector",
    answer: ".small:first-of-type",
    animation: "circle-anima",
    description:
      "Selects each first element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the first dinosaur was selected before it went extinct.",
    example:
      "<strong>div:first-of-type</strong> selects the first <tag>div</tag> in every element.",
    htmlViewer: `
    <circle class="small"/>
    <circle class="small" />
    <line />
    <line />
    <circle class="small" />
    <circle class="small" />
    `,
    completed: false,
    help: false,
    board: [
      "circle small yellow circle-anima",
      "circle small yellow",
      "line ",
      "line ",
      "circle small red circle-anima",
      "circle small red",
    ],
  },
  {
    name: "Last of Type Selector",
    answer: ".small:last-of-type",
    animation: "circle-anima",
    description:
      "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    example:
      "<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.",
    htmlViewer: `
    <circle class="small"/>
    <circle class="small" />
    <line />
    <line />
    <circle class="small" />
    <circle class="small" />
    `,
    completed: false,
    help: false,
    board: [
      "circle small yellow ",
      "circle small yellow circle-anima",
      "line ",
      "line ",
      "circle small red",
      "circle small red circle-anima",
    ],
  },
];

export { level };
