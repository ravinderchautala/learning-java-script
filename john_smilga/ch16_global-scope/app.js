let name = "Ravinder";
name = "Jatta";

// console.log(`Hir name is ${name}`);

function call() {
    console.log(name);
    name = "Ravinder";
    console.log(name);
    function inner() {
        name = "inner name value";
        console.log(`This value from inner function ${name}`);
    }
    inner();
}
call();

if (true) {
    console.log(name);
    name = "Jatta";
}
console.log(name);