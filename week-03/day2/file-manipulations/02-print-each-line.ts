// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
'use strict';

const fs = require('fs');

try {
  console.log(fs.readFileSync('./my-file.txt', 'utf-8'));
} catch (error) {
  console.log('Unable to read file: my-file.txt');
}