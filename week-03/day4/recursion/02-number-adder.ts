// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function recursiveAddition(n: number) {
  if (n <= 0) {
    return 0;
  }
  else {
    return n + recursiveAddition(n - 1);
  }
}

console.log(recursiveAddition(5));