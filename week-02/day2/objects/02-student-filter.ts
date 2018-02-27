'use strict';

let students: any[] = [
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function studentCandies(studentList: string[]) {
  console.log('\nWho has got more candies than four:')
  let filteredStudents: any[] = students.filter(function (studentList) {
    return studentList.candies > 4;
  });

  filteredStudents.forEach(function (studentList) {
    console.log(studentList.name + ' has ' + studentList.candies + ' candies')
  })
}

studentCandies(students);


function candieAverage(studentsList: string[]) {

  let sumOfCandies: number = 0;
  let averageOfCandies: number = 0;
  for (let i: number = 0; i < students.length; i++) {
    sumOfCandies += students[i].candies;
  }
  averageOfCandies = sumOfCandies / students.length
  console.log('\nHow many candies they have on average: \n' + averageOfCandies);
}

candieAverage(students);