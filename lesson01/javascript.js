
 const animalForm = document.getElementById('form');

 animalForm.addEventListener("submit", function(event){
   event.preventDefault()
   console.log("Submitted");
    // Handle input
    const cats = document.getElementById('cats').value
    const dogs = document.getElementById('dogs').value
    const birds = document.getElementById('birds').value
    const bugs = document.getElementById('bugs').value
    
    const catsNumber = parseInt(cats)
    const dogsNumber = parseInt(dogs)
    const birdsNumber = parseInt(birds)
    const bugsNumber = parseInt(bugs)

    let array = [catsNumber, dogsNumber, birdsNumber, bugsNumber];
   
    // forEach() executes a function once for each element in an array
   array.forEach(function(value, key){
     console.log("Value is " + value);
     //console.log("Key is " + key);
   });
    
   // map() calls a function on each element in an array and creates new array with the results
   // this will add 15 to every  value 
   let array2 = array.map(function(value){
      return value + 15
   });
   console.log(array2)
   
   // filter() creates a new array with elements that pass a test specified by a function
   // this will create a new array of every value above 20
   let array3 = array.filter(function(value) {
      return value > 20;
   });
   console.log(array3)
   
   // reduce() executes a reducer funtion for array elements. It returns a single value, the functions accumulated result
   //The total number of animals wil be calculated using the reducer method
   let sum = 0
   sum2 = array.reduce(function(sum, value){
      return sum + value;
   });
   console.log(sum2);

   // Handle output
    const output = document.getElementById('output')
    output.innerHTML = `${catsNumber} cats: ${dogsNumber} dogs: ${birdsNumber} birds: ${bugsNumber} bugs: ${sum2} animals total`

 });
