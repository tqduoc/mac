/*
let js = "amazing";
console.log(10 + 10 - 20);

console.log("jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "LM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "progammer";
let job2 = "teacher";

console.log(myFirstJob);


let javascripIsFun = true;
console.log(javascripIsFun);

// console.log(typeof true);
console.log(typeof javascripIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascripIsFun = "YES!";
console.log(typeof javascripIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1999;
// const job;

var job = "programmer";
job = "teacher";

lastName = "uesugi";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "joans";
const lastName = "uesugi";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; //x = x +10
x *= 4; // x = x * 4
x++; //x = x+1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageJonas >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = "futaro";
const job = "student";
const birthYear = 2006;
const year = 2023;

const futaro =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(futaro);

const futaroNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(futaroNew);

console.log(`Just a regular string...`);

console.log("String with \nmultiple \nlines");

console.log(`String with
multiple
lines`);



const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);



// 5 falsy values: 0,'', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFIEND");
}



const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23");



const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}



const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday" || day === "thurday") {
  console.log("Prepare theory videos");
} else if (day === "thurday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}

*/

const age = 23;
// age >= 18
//   ? console.log("i like to drink wine 🍷")
//   : console.log("i like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
