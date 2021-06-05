'use strict';
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