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