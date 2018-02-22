'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 2, to the center.



let numberOfLines: number = 20;
let centerX: number = canvas.width / 2;
let centerY: number = canvas.height / 2;
let canvasRightEnd: number = canvas.width;
let canvasBottomEnd: number = canvas.height;
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawToCenter(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}

for (let i: number = 0; i < numberOfLines; i++) {
  let y: number = i * canvasBottomEnd / (numberOfLines - 1);
  ctx.strokeStyle = 'purple';
  drawToCenter(0, y);
  drawToCenter(canvasRightEnd, y);
  let x: number = y * canvasRightEnd / canvasBottomEnd;
  ctx.strokeStyle = 'white';
  drawToCenter(x, 0);
  drawToCenter(x, canvasBottomEnd);
}


