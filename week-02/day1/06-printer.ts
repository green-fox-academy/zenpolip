// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printer(argArray: any[]) {
  argArray.forEach(function(item){
    console.log(item);
  })
}

let myArray: any[] = [2, 'hello', 3, 5, 7];

printer(myArray)
