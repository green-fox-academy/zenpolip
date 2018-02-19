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

let space: string = ' '; 
let asterix: string = '*'; 


for(let i:number =1; i <= lineCount; i ++){
     // for(let j: number=0; j <= (lineCount - i-2); j++){
        for(let j: number = (lineCount - i); j > 0; j--){

        space = space + ' ';
        
    }
    console.log(space + asterix);
    space = ' ';
    asterix += '**';
}