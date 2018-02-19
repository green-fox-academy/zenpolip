// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (factIn: number): number{
  let factEqual: number = 1;
  for(let i = 1; i <= factIn; i++){
    factEqual *= i;
  }
  return factEqual;
}

console.log(factorio(5));
