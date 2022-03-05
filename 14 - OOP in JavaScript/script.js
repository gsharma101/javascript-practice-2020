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

// * Prototypes in js
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// * PrototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// *Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor); 

const arr = [3,6,4,5,6,9,3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

// * Coding Challenge 1

// * Coding CHallenge 2