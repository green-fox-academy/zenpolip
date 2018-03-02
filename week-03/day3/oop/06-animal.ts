'use strict';

class Animal {
  name: string;
  hunger: number;
  thirst: number;

  constructor(name: string) {
    this.name = name;
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.thirst = this.hunger += 1;
  }
}

let duck = new Animal('Duck');
console.log(duck);
duck.eat();
console.log(duck);
duck.drink();
console.log(duck);
duck.play();
console.log(duck);