'use strict';

class Domino {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  // helps get value out to log
  getValues() {
    return this.values;
  }
}

export { Domino };