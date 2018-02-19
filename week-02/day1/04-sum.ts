// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(sumIn: number): number{
  let summa: number = 0;
  for(let i = 1; i <= sumIn; i++){
    summa += i;
  }
  return summa;
}

console.log(sum(3));