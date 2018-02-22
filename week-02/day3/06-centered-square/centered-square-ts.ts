'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.translate(0.5, 0.5);

ctx.fillStyle = 'green';
ctx.fillRect(300, 200, 10, 10);
