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