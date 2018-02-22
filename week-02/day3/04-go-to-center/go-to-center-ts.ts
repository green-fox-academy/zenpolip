'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

ctx.translate(0.5, 0.5);


function lineDraw (x: number, y: number) {
  let centerX: number = canvas.height/2;
  let centerY: number = canvas.width/2;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'blue';
  ctx.moveTo(x , y);
  ctx.lineTo(centerY , centerX);
  ctx.stroke();
}

let x: number = 0;
let y: number = 100;
 for (let i: number = 0; i < 3; i++) {
   x = i * 100;
   y = i * -50
   lineDraw(x, y);
 }