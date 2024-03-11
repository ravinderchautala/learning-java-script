// callback functions
function morning(name){
    return `Good Morning ${name}`
}
function afterNoon(name){
    return `Good Afternoon ${name}`
}
function evening(name){
    return `Good Evening ${name}`
}

// global function - higher order function bcz its takes a function as an argument and also return a function
function greet(name,cb){
    const myName = "Ravinder"
    console.log(`${cb(name)} ,My name is ${myName}`)
}
greet("Vinita", morning);
greet("Vinita", afterNoon);
greet("Vinita", evening);