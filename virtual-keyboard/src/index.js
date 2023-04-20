import "./index.html";
import "./main.html";
import "./index.scss";

import "./modules/blocks/header.js";
import "./modules/blocks/main.js";
import "./modules/blocks/footer.js";

import code from "./img/code.png";
import { mult, sum } from "./modules/calc";

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));
console.log("hi");
