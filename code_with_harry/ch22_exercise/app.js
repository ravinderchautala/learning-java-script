let ran = (max) => {
    return Math.floor(Math.random() * max)
}
let b =ran(100)
let a = prompt("Guess the numner")
a = Number.parseInt(a)
for(let i = 1;i<=100;i++){
let score = 100-i
if(b == a){
    document.write(`You have left ${score} left and the original number is ${b}`)
    console.log(`Your Score is : ${score}`)
    break
}else if(b > a){
    alert("your number is smaller")
    a = prompt("Guess the numner")
}else if(b < a){
    alert("Your number is greater")
    a = prompt("Guess the numner")
}}