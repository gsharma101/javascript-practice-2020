'use strict';
/*
const firstName = "Gaurav"; //?Global variable
function calcAge(birthYear) {
    const age = 2021 - birthYear;
    function printAge() {
        const output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1986) {
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        } else {
            console.log(`You are not a millenial`);
            function add(a, b) { //!Functions are also block scoped in ES6
                return a + b;
            }
        }
    }
    printAge();
    return age;
}
calcAge(2000);

const myName = 'Gaurav';

if (myName === 'Gaurav') {
    console.log(`Jonas is a ${job}`);
    const age = 2037 - 1989;
    console.log(age);
    //! job variable declared & initialized after console
    const job = 'Entreprenaur';
    console.log(x);
}


//!HOISTING PRACTICE
console.log(me);
console.log(job);
console.log(year);
//* using variable before declaration
var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

console.log(add(3, 4));
console.log(addExp(3, 4));
console.log(addArr(3, 4));
//* using using before declaration

//!Function Declaration
function add(a, b) {
    return a + b;
}
//!Function Expression
const  addExp = function (a, b) {
    return a + b;
}
//!arrow function
const addArr = (a, b) => {
    return a + b;
}

//?This keyword
// !calling it globally - point to windows object
console.log(this);
// !calling in a normal function - undefined (only in strict mode)
const calcAge = function (birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
}

calcAge(2000);
//! arrow function use this keyword of its parent scope
const calcAge2 = (birthYear) => {
    console.log(2021 - birthYear);
    console.log(this);//* points to the this keyword at parent scope
}

calcAge2(2005);
//! this keyword point to the person object
const person = {
    firstName: "Gaurav",
    lastName: "Sharma",
    yearBorn: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2021 - this.yearBorn);
    }
};
person.calcAge();
//! This keyword always point ot the object that is calling the medhod see example below

const jarvis = {
    firstName: "jarvis",
    lastName: "AI",
    yearBorn: 1995
}
//! this process is called method borrowing
jarvis.calcAge = person.calcAge;

jarvis.calcAge();

// ! Regular Function and Arrow Function
const person = {
    firstName: "Gaurav",
    lastName: "Sharma",
    yearBorn: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2021 - this.yearBorn);
        const greet = () => console.log(`Hey ${this.firstName}`);
        greet();
    }
};
person.calcAge();
*/