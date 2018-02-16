'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is



let s: string = ' '; 
let a: string = '*'; 

for(let i:number =0; i < lineCount/2; i ++){
    s = ' ';
    for(let j: number=1; j <= (lineCount - i); j++){
        s += ' ';
    }
    console.log(s + a);
    a = '*' + a + '*';
}
      

for (let i:number = 1; i <= ((lineCount-1)/2); i++) {
    a ='*';
    s += ' ';
    for (let k:number = ((lineCount)-2*i); k > 1; k-- ) {
        a += '*';
    }    
    console.log(s+a);    
}