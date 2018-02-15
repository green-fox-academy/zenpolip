'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let timeInSeconds: number = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
let timeLeftInDay: number = (24 * 60 * 60) - timeInSeconds;

console.log('The time is ' +currentHours +':' +currentMinutes +':'+currentSeconds);
console.log(timeLeftInDay + ' seconds remaining from this day');