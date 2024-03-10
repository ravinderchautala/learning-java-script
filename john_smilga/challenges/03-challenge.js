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