let ran = (max) => {
    return Math.floor(Math.random() * max)
}
let a = prompt("Guess the numner")
a = Number.parseInt(a)
for(let i = 1;i<=10;i++){
let score = 10-i
if(ran(10) == a){
    console.log(`Your Score is : ${score}`)
    break
}else{
    a = prompt("Guess the numner")
}}