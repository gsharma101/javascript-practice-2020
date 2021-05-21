/*
let js = "amazing";
if(js === 'amazing') alert('Javascript is FUN!');
const data = 48 + 8 + 23 - 10
console.log(data);
*/
//*Math Operator
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now -2018;
console.log(ageJonas,ageSarah); //?multiple console.log
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //!Different Values of console.log
// ! 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Gaurav";
const lastName = "Sharma";
console.log(firstName+" "+lastName);
//* Assignment operators
let x = 10 + 5;
x += 10;// x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
*/
/*
//? Marks and Johns BMI
const marksWeight = 78;
const johnWeight = 92;
const markHeight = 1.67;
const johnHeight = 1.88;
const markBMI = marksWeight / markHeight ** 2;
const johnBMI = johnWeight / markHeight ** 2;
console.log(markBMI, johnBMI);
*/
/*
//? String litrals 
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
//? using back Ticks
const jonasNew = `I'am ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(jonas);
console.log(jonasNew);
*/
/*
let billValue = 400;
let tip = 0;
let total = 0;
if(billValue>=50 && billValue<=300){
    tip = (15/100) * billValue;
    total = tip + billValue;
    console.log(`The bill was ${billValue}, the tip was ${tip} and the total value is ${total}`);
}else if(billValue>300){
    tip = (20/100) * billValue;
    total = tip + billValue;
    console.log(`The bill was ${billValue}, the tip was ${tip} and the total value is ${total}`);
}else{
    tip = 0;
    total = tip + billValue;
    console.log(`The bill was ${billValue}, the tip was ${tip} and the total value is ${total}`);
}
*/

const bill = 275;
const tip = (bill <= 300 && bill>=50) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);