// Create Sharpie class
// We should know about each sharpie their color (which should be a string), 
// width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

'use strict'

class Sharpie {
  color: string;
  witdh: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.witdh = width;
    this.inkAmount = 100;
  }

  // use method - depends on how much hours are the sharpies used
  use(hoursOfUse: number) {
    this.inkAmount -= (1 * hoursOfUse);
  }
}

let sharpieBig = new Sharpie('purple', 2.5);

console.log(sharpieBig);
sharpieBig.use(10);
console.log(sharpieBig);
