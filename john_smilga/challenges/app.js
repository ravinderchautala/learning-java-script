// 1st challenge -Variables
let firstName = "Vinita";
let lastName = "Ravinder";
let address = "main street";
address = "first street";
console.log(firstName);
console.log(lastName);
console.log(address);

// 2nd challenge - Concating Strings
let street = "Bas Gokal";
let country = "India";
let fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);


//  3rd challenge - numbers
let score1, score2, score3, totalScore, averageScore;
score1 = 97;
score2 = 98;
score3 = 95;
totalScore = score1 + score2 + score3;
averageScore = totalScore / 3;
console.log(totalScore);
console.log(averageScore);



// 4th challenge - Arrays
const fruits = ['Mango', 'Apple', 'Banana', 'Pineapple', 'Orange', 9];

let firstFruit = fruits[0];

fruits[fruits.length - 1] = 'Guava';

console.log(firstFruit, fruits);


// 5th challenge - Functions
// function calculateTotal(subTotal, tax) {
//     return subTotal + tax;
// }
const calculateTotal = function (subTotal, tax) {
    return subTotal + tax;
}

const order1 = calculateTotal(100, 20);
const order2 = calculateTotal(90, 18);
const order3 = calculateTotal(150, 30);
console.log(order1, order2, order3);

// 6th challenge - Objects

const car = {
    make: "Ferrari",
    model: '812 GTS',
    year: 2022,
    colors: ['Red', 'Yelllow', 'Blue', 'Grey'],
    hybrid: false,
    drive: function () {
        console.log('hey do you want to take a test drive');
    },
    stop: function () {
        console.log('please stop the car if engine make different noise');
    }
};
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

// 7th challenge - Conditionals
const person1 = {
    name: 'Vinita',
    age: 25,
    status: 'resident',

}
const person2 = {
    name: 'Annu',
    age: 23,
    status: 'tourist',
}

if (person1.age >= 18 && person1.status === 'resident') {
    console.log("you are eligible to marry with me");
} else {
    console.log("you are not eligible to marry with me");
}
if (person2.age >= 18 && person2.status === 'resident') {
    console.log("you are eligible to marry with me");
} else {
    console.log("you are not eligible to marry with me");
}

// 8th challenge - Strings

// 9th challenge - 