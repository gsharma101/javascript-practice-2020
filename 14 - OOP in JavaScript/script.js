'use strict';
// ! Constructor functions and new operator
const Person = function(firstName, birthYear){
    // ? Insstance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    //! Bad practice of using a method Never create a method inside a constructor function
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. A new empty object is created
// 2. function is called, this = {}
// 3. {} Linded to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack',1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// * Prototypes in javascript practice
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();

