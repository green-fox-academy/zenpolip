class DiceSet {
  /**   You have a Dice class which has 6 dice */
  /**   You can roll all of them with roll() */
  /**   Check the current rolled numbers with getCurrent() */
  /**   You can reroll with reroll() */
  /**   Your task is to get where all dice is a 6 */
  dices: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dices = [];
    for (var i = 0; i < this.numOfDices; i++) {
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number): number {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        return this.dices[i];
      }

    } else {
      return this.dices[index];
    }
  }
}

let myDice = new DiceSet();
myDice.roll();

for (let i = 0; i < 6; i++) {
  while (myDice.getCurrent(i) !== 6) {
    console.log("---Roll dice number " + (i + 1) + '---');
    myDice.reroll(i);
    console.log(myDice.getCurrent(i));
  }
  if (myDice.getCurrent(i) === 6) {
    console.log('Yess, on dice number ' + (i + 1) + ' we rolled ');
    console.log(myDice.getCurrent(i));
  }
}
