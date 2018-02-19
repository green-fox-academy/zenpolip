// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`


let nameGreet: string = 'Greenfox';
/* first version
function greet(greeting?: string) {
  let welcomeString: string = 'Greetings, dear ';
  if (greeting) {
      console.log(welcomeString += nameGreet)
  } 
  else {
    console.log(welcomeString += 'guest');
  }
  return welcomeString;
}
*/

//second version
function greet(nameDefault: string = 'guest') {
  let welcomeString: string = 'Greetings, dear ';
  if (nameDefault) {
      console.log(welcomeString += nameDefault)
  } 
  else {
    console.log('else ag')
    console.log(welcomeString += 'guest');
  }
  return welcomeString;
}

//best version
function greet2(nameDefault: string = 'guest'): string {
  return 'Greetings, dear ' + nameDefault;
}

console.log(greet2('Bazsi'));
console.log(greet2());
console.log(greet2(nameGreet));

