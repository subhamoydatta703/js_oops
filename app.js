// function personMAker(name, age) {
//     // personMaker is a factory function(a function that create objects) which returns onject
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hello, I'm ${this.name}`);
//     },
//   };

//   return person;
// }
function PersonMake(name, age) {
    // this is better approach than function maker
  // PersonMake is a constructor
  // a constructor doesn't return any value and it's name start with capital letter

  this.name = name, 
  this.age = age;

}

let p1 = new PersonMake("subhamoy", 25)