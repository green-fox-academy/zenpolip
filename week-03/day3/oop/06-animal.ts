'use strict'

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

let kacsa = new Animal('Kacsa');
console.log(kacsa);
kacsa.eat();
console.log(kacsa);
kacsa.drink();
console.log(kacsa);
kacsa.play();
console.log(kacsa);