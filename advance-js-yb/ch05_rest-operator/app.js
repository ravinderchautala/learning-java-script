// function sum(){
//     let sum = 0
//     for(let i in arguments){
//         sum += arguments[i]
//     }
//     console.log(sum);
// }
// sum("Vinita",23,45,35,46)

// rest operator (...args)
function sum(name,course,...args){
    let sum = 0
    for(let i in args){
        sum += args[i]
    }
    console.log(sum);
    console.log(name,course)
}
sum("Vinita","P.hd",23,40,34,46)