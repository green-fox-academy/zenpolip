// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[]= [1, 2, 3, 8, 5, 6];

numList.splice(3, 1, 4);
console.log(numList);


/*
numList2 = numList2.map (function (item: number){
  if (item === 8) {
      return 4;
  } else {
      return item;
  }
})
console.log(numList2);
*/