// Declaration
function hello() {
    console.log('Hello there Vinita');
    console.log('Hello there Annu');
    console.log('Hello there Ravinder');
}
// Invoking
hello();

// function with parameters
function greet(name) {
    console.log('Hello there ' + name);
}
let nam = "Vinita";
greet(nam);


// Return in Functions
const wallHeight = 80;

function calc(value) {
    const newValue = value * 2.54;
    return newValue;
}

const width = calc(100);
const height = calc(wallHeight);

const dim = [width, height];
console.log(dim);

// function expression
const add = function (num1, num2) {
    return num1 + num2;
}
const value = add(45, 89);
console.log(value);