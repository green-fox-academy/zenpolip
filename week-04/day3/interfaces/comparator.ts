'use strict';

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

 compareTo(stuff: Domino): number{
  if (this.values[0] < stuff.values[0]) {
    return -1;
  }
  else if (this.values[0] > stuff.values[0]) {
    return 1;
  }
  else {
    return 0
  }
  // a must be equal to b
 }

  // helps get value out to log
  getValues() {
    return this.values;
  }
}

interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

let dominoes: Domino[] = [];

dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

console.log(dominoes);
// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]