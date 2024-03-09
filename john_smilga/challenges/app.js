/*
============
Challenge-1
============
*/
let firstName = "Ravinder";
let lastName = "Chautala";
let address = "Main Street";
address = "First Street";

console.log(firstName);
console.log(lastName);
console.log(address);

/*
============
Challenge-2
============
*/
const street = "Ambedkar street";
const country = "India";
const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

/*
============
Challenge-3
============
*/
const score1 = 69;
const score2 = 43;
const score3 = 57;
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;
console.log(averageScore);
console.log(totalScore);

const plates = 20;
const people = 7;
let remaining = plates % people;
remaining++;
const message = `There are ${remaining} plates available.`;
console.log(message);

/*
============
Challenge-4
============
*/
const fruits = ['Banana', 'Mango', 'Apple', 'Pineapple', 'Watermelon', 'Kiwi', 'Strawberry', 69];
const firstFruit = fruits[0];
fruits[7] = "Lichi";
console.log(firstFruit);
console.log(fruits);

/*
============
Challenge-5
============
*/
// function calculateTotal(subTotal, tax) {
//     return subTotal + tax;
// 
const calculateTotal = function (subTotal, tax) {
    return subTotal + tax;
}

var order1 = calculateTotal(67, 34);
var order2 = calculateTotal(76, 21);
var order3 = calculateTotal(43, 65);
console.log(order1, order2, order3);


/*
============
Challenge-6
============
*/
const car = {
    make: "bugati",
    model: "Mistral",
    year: 2023,
    colors: ['red', 'yellow', 'dark', 'white'],
    hybrid: true,
    drive: function () {
        console.log("Hey try a test drive first!");
    },
    stop: function () {
        console.log("Your Test drive is Over!");
    }
}
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

/*
============
Challenge-7
============
*/
const person1 = {
    name: "Ravinder",
    age: 20,
    status: "single"
}
const person2 = {
    name: "Jatta",
    age: 23,
    status: "Committed"
}

if (person1.age >= 18 && person1.status === "single") {
    console.log("you are eligible");
} else {
    console.log("you are not eligible");
}
// if (person2.age >= 18 && person2.status === "single") {
//     console.log("you are eligible");
// } else {
//     console.log("you are not eligible");
// }

/*
=====================
String Challenge-8
=====================
*/

// function fullName(fName, lName) {
//     let funame = `${fName} ${lName}`;
//     return funame.toUpperCase();
// }
// let res = fullName("Ravinder", "Chautala");
// console.log(res);


function fullName({ fName, lName }) {
    let funame = `${fName} ${lName}`;
    return funame.toUpperCase();
}

console.log(fullName({ lName: "Chautala", fName: "Ravinder" }));
