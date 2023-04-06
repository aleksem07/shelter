import dataPets from './data.js';
// let dataPets = pets.json;
console.log('hello carousel');

const track = document.querySelectorAll('.carousel');
const slides = Array.from(track[0].children);
const nextButton = document.querySelector('.pets-slider__arrow--right');
const prevButton = document.querySelector('.pets-slider__arrow--left');

const windowWidth = document.body.getBoundingClientRect().width;
console.log(windowWidth);

console.log(dataPets);
