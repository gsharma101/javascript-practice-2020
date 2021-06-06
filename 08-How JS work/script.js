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
*/

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
const addExp = function (a, b) {
    return a + b;
}
//!arrow function
const addArr = (a, b) => {
    return a + b;
}

