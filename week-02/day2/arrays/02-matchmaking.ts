'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

let matchedList: string[] = [];

function makingMatches(listA: string[], listB :string[]):string[] {
  for(let i: number= 0; i < listA.length; i ++){
    matchedList.push(listA[i]);
    matchedList.push(listB[i]);
    }
  return matchedList;
}
console.log(makingMatches(girls, boys));

export = makingMatches;

