// Create a Pirate class. While you can add other fields and methods, 
// you must have these methods:
//
// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
//   0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...
// Add a parrot.

class Pirate {
  drunkIndex: number = 0;
  isAlive: boolean = true;

  drinkSomeRum(shotOfRum: number){
    this.drunkIndex += shotOfRum;
    console.log(shotOfRum + ' rum is down...')
  }

  passOut(){
    this.drunkIndex = 0;
  }
  howsItGoingMate(){
    if(!this.isAlive){
      console.log('he\`s dead');
    }
    else if(this.drunkIndex <= 4){
      console.log('Pirate: Pour me anudder!');
    }
    else{
      console.log('Pirate: Arghh, I\'ma Pirate. How dya d\'ink its goin?');
      this.passOut();
      console.log(' - pirate passed out ....zz.ZZ.zz.ZZ');
    
    }
  }
  die(){
    this.isAlive = false;
  }
  brawl(opponent: Pirate){
    let brawlResult: number = Math.floor(Math.random() * Math.floor(3));
    if (brawlResult === 0){
      this.die();
    }
    else if( brawlResult === 1){
      opponent.die();
    }
    else{
      this.passOut();
      opponent.passOut();
    }
  }
}


let pirate1 = new Pirate;
let pirate2 = new Pirate;

pirate1.brawl(pirate2);
console.log(pirate1);
pirate1.howsItGoingMate();
console.log(pirate2);
pirate2.howsItGoingMate();






