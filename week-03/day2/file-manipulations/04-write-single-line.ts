// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
'use strict';

const fs = require('fs');

let myName: string = 'Bazsi';
let fileName: string = './my-file.txt';
try {
  fs.writeFileSync(fileName, (fs.readFileSync(fileName, 'utf-8')) + '\n' + myName);

}

catch (error) {
  console.log('Unable to write the file: my-file.txt')
}