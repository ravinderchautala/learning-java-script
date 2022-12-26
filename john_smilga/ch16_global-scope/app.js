let name = "Vinita"
name = "Annu"

// console.log(`Her name is ${name}`);

function call() {
    console.log(name);
    name = "Vinita"
    console.log(name);
    function inner() {
        name = "inner name value"
        console.log(`This value from inner function ${name}`)
    }
    inner()
}
call()

if (true) {
    console.log(name);
    name = "Annu"
}
console.log(name)