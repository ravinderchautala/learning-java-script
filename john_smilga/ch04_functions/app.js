// Declaration
function hello(){
    console.log("Hello There Vinita")
    console.log("Hello There Anu")
    console.log("Hello There Jatta")
}
// Invoking
hello()

// function with parameters
function greet(name){
    console.log("Hello There "+ name)
}
greet("Vinita")

// Return in Functions
let pow = (a,b)=>{
    return a**b
}
console.log(pow(4,5))