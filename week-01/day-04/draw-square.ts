'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let printOut: string = null; 

for(let i: number= 1; i <= lineCount; i++){
    printOut = '%';
    for(let j: number= 1; j < lineCount; j++){
        
        if ( (i === 1) || (i === lineCount)){
        printOut += '%';
        }
        else if(j === lineCount - 1) {
            printOut += '%';
        } 
        else {
           printOut += ' ';
        }
    }
    console.log(printOut);
}