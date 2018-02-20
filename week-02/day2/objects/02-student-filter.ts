'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function studentCandies(studentList: string[]) {
  console.log("Who has got more candies than 4:")
  let filteredStudents: any[] = students.filter(function(studentList) {
    return studentList.candies > 4;
    });

  // console.log(currentStudent[0].name + ': ' + currentStudent[0].candies)
  filteredStudents.forEach(function(studentList) {
    console.log(studentList.name + ': ' + studentList.candies)
    })
}

studentCandies(students);


function candieAverage(studentsList: string[]){
  console.log("How many candies they have on average:");
  let sumOfCandies: number = 0;
  let averageOfCandies: number = 0;
  for(let i: number= 0; i < students.length; i++){
    sumOfCandies += students[i].candies;
  }
  averageOfCandies = sumOfCandies / students.length
  console.log("How many candies they have on average:" + averageOfCandies);
}

candieAverage(students);