'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dotsArray: any[] = [[10, 10], [290, 10], [290, 290], [10, 290], [10, 10]];
let surpriseArray: any[] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];


function connectDots(input: any[][]) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();

// cycle through the array by its 'x' and 'y' 
  for (let x: number = 0; x < input.length; x++) {
    let y: number = 0;
    ctx.lineTo(input[x][y], input[x][y + 1]);
    ctx.stroke();
  }
}

connectDots(dotsArray);
connectDots(surpriseArray);
