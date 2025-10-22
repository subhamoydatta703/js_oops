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

PersonMake.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
    
}

let p1 = new PersonMake("subhamoy", 25)
// new operator = if we already created a constructor then by using new operator we can create a new object or instance
console.log(p1);
