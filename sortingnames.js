let array2=[];

//initalize array
let array= ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

// prompt to add last name
let lastName= prompt("What is your last name?")

// add last name to array
array.push(lastName)
console.log(`Last name added: ${array}`)


//sort array alaphetically
array.sort()
console.log(`Sorted apaphetically: ${array}`)

//position of name in array
var position = array.indexOf(lastName);
console.log(`Position in array: ${position}`)

//make all last names uppercase

for (let name of array){
var uppercase= name.toUpperCase()
array2.push(uppercase)
}
console.log(`Uppercase: ${array2}`)


// create sub
var array3 = [];
var array4 = [];

for (i=0; i<array.length; i++) {
    array3.push(array[i]);
    array3.push(array2[i]);
    array4.push(array3)
    array3=[]
  }

console.log(array4)