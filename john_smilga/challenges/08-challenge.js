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
