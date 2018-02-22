'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.translate(0.5, 0.5);
let colors: string[] = ['blue', 'red', 'green', 'black']

function fourSquare(x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 20, 20);
}

let x: number = 20;
let y: number = 20;

colors.forEach(function (AColor) {
  fourSquare(x, y, AColor);
  x += 25;
  y += 25;
})