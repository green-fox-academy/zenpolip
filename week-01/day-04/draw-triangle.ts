'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

//for (let i: number = 0; i <
let asterix: string = '*'; 
for(lineCount; lineCount > 0; lineCount--){
    console.log(asterix);
    asterix += '*';
}