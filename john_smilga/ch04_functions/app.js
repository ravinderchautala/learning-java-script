// Declaration
function hello() {
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}
// Invoking
hello();

// function with parameters
function print(name) {
    console.log("toh kese hain " + name);
}
const nam = "AAPLOG"
print(nam)
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
