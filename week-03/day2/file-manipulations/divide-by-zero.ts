// Create a function that takes a input
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByThen(input: any){
  if(input !== 0){
    console.log(input / 10); 
  }else{
    console.log('fail')}
  
}
divideByThen(0);