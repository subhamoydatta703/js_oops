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
// function PersonMake(name, age) {
//     // this is better approach than function maker
//   // PersonMake is a constructor
//   // a constructor doesn't return any value and it's name start with capital letter

//   this.name = name, 
//   this.age = age;

// }

// PersonMake.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
    
// }

// let p1 = new PersonMake("subhamoy", 25)
// // new operator = if we already created a constructor then by using new operator we can create a new object or instance
// console.log(p1);

class Person {
    //  class is a template for creating objects
    // It is a better approach than the previous one
    constructor(name, age){
        // constructor is a method using of class for creating and initializing object instance for that class
       this.name= name,
       this.age= age;
    }
    talk (){
        console.log(`Hello, this is ${this.name}`);
        // we can directly create the talk() function inside of the class
        
    }

}

let m1 = new Person("subhamoy", 25)

console.log(m1);

