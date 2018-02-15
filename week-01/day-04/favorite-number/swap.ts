'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;
let temp: number = 0;

console.log(`a=${a}, b=${b}`);

temp = b;
b = a;
a = temp;

console.log(`After swapping a=${a}, b=${b}`)

