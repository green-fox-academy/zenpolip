// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let nimals: string[]= ['kuty', 'macsk', 'cic'];

// using simple for loop
for(let i: number= 0; i <= nimals.length-1; i++){
  nimals[i] += 'a';
}
console.log(nimals);

/* using map function

nimals = nimals.map(function(item: string){
  return item + 'a';
});
console.log(nimals);
*/