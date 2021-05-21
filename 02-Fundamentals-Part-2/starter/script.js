'use strict';
/*
const calcAge = birthYear => 2021 - birthYear;
console.log(calcAge(2000));

//more than one line of code
const yearsUntilRetirement = birthYear =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

//more than one parameters
const yearsUntilRetirement2 = (birthYear2, firstName) =>{
    const age = 2037 - birthYear2;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1991,'Jonas'));
*/

/*
//!function calling another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/
/*
const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

const checkWinner = (avg1, avg2) => {
    if (avg1 >= 2 * avg2) {
        console.log(`Koalas are the winners 🥇 (${avg1} vs ${avg2})`);
    } else if (avg2 >= 2 * avg1) {
        console.log(`Dolphins are the winners 🥇 (${avg1} vs ${avg2})`);
    } else {
        console.log(`No one wins 👎`);
    }
}

const koalas = calcAverage(44, 23, 71);
const dolphins = calcAverage(65, 54, 49);
const winner = checkWinner(576, 111);
*/
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tip[0], bills[1] + tip[2], bills[2] + tip[2]];
console.log(bills, tip, totals);
*/
/*
const person = {
    firstname: "Gaurav",
    lastName: "Sharma",
    age: 2021 - 2000,
    job: "Entreprenaur",
    friends: ['Tony', 'jarvis', 'book nerds']
};

console.log(person.firstname);

const interestedIn = prompt("What do you want to kanow about Gaurav? Choose between firstName,lastName,age,job and friends");

if (person[interestedIn]) {
    console.log(person[interestedIn]);
} else {
    console.log("Wrong request! Try again");
}

person.location = "Dalhousie";
person['twitter'] = 'gsharma010';

console.log(`${person.firstname} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        return this.age = 2037 - this.birthYear;
    }
};

jonas.calcAge();
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

john.calcBMI();
mark.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`Mark BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
} else {
    console.log(`John BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repretition ${rep}`);
}
*/
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    let elements = jonas[i];
    console.log(elements);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------Starting Exercise ${exercise}----------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repeition ${rep} 💪`);
    }
}
*/
/*
let rep = 1;

while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let Dice = Math.trunc(Math.random() * 6) + 1;

while (Dice !== 6) {
    console.log(`You rolled a ${Dice}`);
    Dice = Math.trunc(Math.random() * 6) + 1;
}
*/

const bills = [22, 295, 276, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     total[i] = bills[i] + tips[i];
// }
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total);

