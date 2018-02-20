'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '?em gnihsinup uoy era yhw ,tpircsepyT raeD';

function reverse(stringIn){
  let newString: string = '';
  for(let i: number = 0; i <= reversed.length; i++){
    newString += reversed.charAt(reversed.length -i -1);
    }
  stringIn = newString;
  return stringIn;
}

console.log(reverse(reversed));

export = reverse;