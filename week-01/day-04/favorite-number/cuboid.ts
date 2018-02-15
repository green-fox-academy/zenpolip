'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cubex: number = 10.1;
let cubey: number = 20.3;
let cubez: number = 30.4;

console.log(`Surface Area: ${ 2*(cubex*cubey) + 2*(cubex*cubez) + 2*(cubey*cubez) }`);
console.log(`Volume: ${cubex*cubey*cubez}`);