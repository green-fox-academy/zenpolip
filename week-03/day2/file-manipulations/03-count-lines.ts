// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

const fs = require('fs');

function countLines(filePath) {
  let fileBuffer = fs.readFileSync(filePath);
  let to_string = fileBuffer.toString();
  let split_lines = to_string.split("\n");
  console.log(split_lines.length);
}

try {
  countLines('my-file5.txt');
} catch (error) {
  console.log(0);
}