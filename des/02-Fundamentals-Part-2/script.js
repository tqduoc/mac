"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can driver :D");

// const interface = "Audio";
// const private = 532;



function logger() {
  console.log("My name is Futaro");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2006);

// function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2006);
console.log(age1, age2);



// Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2006, "Futaro"));
console.log(yearsUntilRetirement(2000, "Nino"));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

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
};

console.log(yearsUntilRetirement(2006, "Futaro"));
console.log(yearsUntilRetirement(1950, "john"));



const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", " alice"];

const firstName = "futaro";
const futaro = [firstName, "Schmedtmann", 2023 - 2006, "student", friends];

console.log(futaro);
console.log(futaro.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);



const friends = ["Micheal", "Steven", "Peter"];

// add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("you have a friend called Steven");
}

const futaro = {
  firstName: "futaro",
  lastName: "uesugi",
  age: 2023 - 2006,
  job: "student",
  friends: ["micheal", "peter", "steven"],
};



const futaro = {
  firstName: "futaro",
  lastName: "uesugi",
  age: 2023 - 2006,
  job: "student",
  friends: ["micheal", "peter", "steven"],
};
console.log(futaro);
console.log(futaro.lastName);
console.log(futaro["lastName"]);

const nameKey = "Name";
console.log(futaro["first" + nameKey]);
console.log(futaro["last" + nameKey]);

//error
// console.log(futaro."first" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Futaro? choose between firstName, lastName, age, job, and friends"
);

if (futaro[interestedIn]) {
  console.log(futaro[interestedIn]);
} else {
  console.log(
    "Wrong request! choose between firstName, lastName, age, job, and friends"
  );
}

futaro.location = "Portugal";
futaro["twitter"] = "@uesugifutaro";
console.log(futaro);

// challenge
// "futaro has 3 friend, and his best friend is called Micheal"
console.log(
  `${futaro.firstName} has ${futaro.friends.length} friend , and his best friend is called ${futaro.friends[0]}`
);



const futaro = {
  firstName: "futaro",
  lastName: "uesugi",
  birthYear: 2006,
  job: "student",
  friends: ["micheal", "peter", "steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //    console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year ${
      futaro.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(futaro.calcAge());

console.log(futaro.age);
console.log(futaro.age);
console.log(futaro.age);

// Challenge
console.log(futaro.getSummary());



// for loop keeps running while condition ís true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}



const futaro = [
  "Futaro",
  "schmedtmenn",
  2023 - 2006,
  "student",
  ["micheal", "peter", "steven"],
  true,
];

const types = [];

// console.log(futaro[0]);
// console.log(futaro[0]);
// ...
// console.log(futaro[4]);
// futaro[5] does not exist

for (let i = 0; i < futaro.length; i++) {
  // reading from futaro array
  console.log(futaro[i], typeof futaro[i]);

  // filling types array
  // types[i] = typeof futaro[i];
  types.push(typeof futaro[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// continue and break
console.log("-----only strings-------------");
for (let i = 0; i < futaro.length; i++) {
  if (typeof futaro[i] !== "string") continue;

  console.log(futaro[i], typeof futaro[i]);
}

console.log("-----only with number-------------");
for (let i = 0; i < futaro.length; i++) {
  if (typeof futaro[i] === "number") break;

  console.log(futaro[i], typeof futaro[i]);
}



const futaro = [
  "Futaro",
  "schmedtmenn",
  2023 - 2006,
  "student",
  ["micheal", "peter", "steven"],
];

for (let i = futaro.length - 1; i >= 0; i--) {
  console.log(futaro[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------starting exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(` Exercise ${exercise}: lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end...");
}
