'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let s: string = ' '; 
let a: string = '*'; 


for(let i:number =0; i < lineCount; i ++){
    s = ' ';
    for(let j: number=1; j <= (lineCount - i); j++){
        s = s + ' ';
    }
    console.log(s + a);
    a = '*' + a + '*';
}
