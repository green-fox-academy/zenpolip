'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

ctx.translate(0.5, 0.5);


function purpleSteps(x: number, y: number) {

  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 20, 20);
  ctx.strokeRect(x, y, 20, 20);
  ctx.stroke();
}

let x: number = 0;
let y: number = 0;

for (let i: number = 0; i < 10; i++) {
  x = i * 20;
  y = i * 20;
  purpleSteps(x, y);
}