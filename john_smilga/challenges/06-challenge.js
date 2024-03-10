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
