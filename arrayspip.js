//  Given an array of strings, use a function to reverse all 
//  the elements in the string in ascending order and the specific 
//elements in descending order in js

function Strings(string){
    return string.split("").reverse().join("")
  }
  let string =( "learning")
  
  console.log(Strings(string));
  
  // Given an array of objects, each object representing a person with a name and age property,
  // write a function that returns the sum of all people who are less than 18 years in js.
  // const people = [
  //   { name: 'Alice', age: 17 },
  //   { name: 'Eunice', age: 22 },
  //   { name: 'Charlie', age: 14 },
  //   { name: 'Max', age: 19 },
  // ];
  function names(people){
      return people.filter(people=>people.age<18,
          people=>people.name)
  
  }
  const people=[
      { name: 'Alice', age: 17 },
        { name: 'Eunice', age: 22 },
        { name: 'Charlie', age: 14 },
        { name: 'Max', age: 19 },
  ]
  console.log(names(people))
  
  
    // Using JS functions and an array of numbers, return positive if an
    //  element within the array is positive, negative if an element is negative, else zero
  function Array(num){
let result=0;
if(num>0){
  return "positive"
}else if(num<0){
  result="negative"
}
return "negative"

  }
  let num=[-5,-6]
  console.log(Array(num))
  
  
  // Given an array of objects, where each object represents an employee with an id, name, and salary property,
  // write a function that returns a new array of employee objects 
  // sorted by their salary in ascending order. in js
  
  function salary(employees) {
      const sort = employees.slice().sort((a, b) => salary.salary - b.salary);
      return sort;
    }
  
  
    const employees = [
      { id: 1, name: 'mercy', salary: 40000 },
      { id: 2, name: 'caren', salary: 20000 },
      { id: 3, name: 'faith', salary: 45000 },
      { id: 4, name: 'ian', salary: 5000 },
    ];
    
    const sort = salary(employees);
    console.log(sort);