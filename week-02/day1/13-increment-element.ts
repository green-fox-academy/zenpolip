// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
'use strict'

let numList: number[] = [1, 2, 3, 4, 5];
console.log('3rd element of array: ' + numList[2]);
numList[2]++;
console.log('After incrementing the 3rd element: ' + numList[2]);