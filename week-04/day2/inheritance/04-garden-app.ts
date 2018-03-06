'use strict';

class Garden {

  plants: Plant[] = [];

  newPlant(plant: Plant) {
    this.plants.push(plant);
  }

  gardenStatus(): string {
    let gardenStatusLog: string = '';
    this.plants.forEach(function(element){
      gardenStatusLog += `The ${element.name} ${element.type} ${element.doesItNeedWater() ? 'needs' : 'doesn\`t need'} water \n\r`
    });
    return gardenStatusLog;
  }


}

class Plant {
  name: string;
  type: string;
  waterAmount: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  doesItNeedWater() {};
  pourWater(amount: number) {};
}


class Flower extends Plant {

  constructor(name: string) {
    super(name);
    this.type = 'Flower';
  }

  pourWater(amount: number) {
    this.waterAmount += amount * 0.75;
  }

  doesItNeedWater(): boolean {
    return this.waterAmount < 5;
  }
}

class Tree extends Plant {

  constructor(name: string) {
    super(name);
    this.type = 'Tree';
  }

  pourWater(amount: number) {
    this.waterAmount += amount * 0.4;
  }

  doesItNeedWater(): boolean {
    return this.waterAmount < 10;
  }
}

let flowerYellow: Flower = new Flower('yellow');
let flowerBlue: Flower = new Flower('blue');
let treePurple: Tree = new Tree('purple');
let treeOrange: Tree = new Tree('orange');
let myGarden: Garden = new Garden();

myGarden.newPlant(flowerBlue);
myGarden.newPlant(flowerYellow);
myGarden.newPlant(treeOrange);
myGarden.newPlant(treePurple);


console.log(myGarden.gardenStatus());
