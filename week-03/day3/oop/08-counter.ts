// Create a Counter class
// which has an integer integer
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict';

class Counter {
  integer: number;

  constructor(integer?: number){
    if(integer === undefined){
      this.integer = 0;
    }
    else{
      this.integer = integer;
    }
  }

  add(){
    this.integer ++;
  }
  get(){
    console.log(this.integer.toString());
  }
  reset(){
    this.integer = 0;
  }
}

let counterOne = new Counter();
console.log(counterOne);
counterOne.get();
counterOne.add();
counterOne.get();
counterOne.add();
console.log(counterOne);
counterOne.add();
counterOne.get();
counterOne.reset();
counterOne.get();
console.log(counterOne);