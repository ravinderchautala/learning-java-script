let num =[2,3,2,5,9,6]
/*// for loop
for(let i=0;i<num.length;i++){
    console.log(num[i])
}*/

// forEach loop
num.forEach((element) =>{
    console.log(element*element)
})

// Array.from
let name = "Vinita"
let arr = Array.from(name)
console.log(arr)

// for.....of
for(let i of num){
    console.log(i)
}

// for....in
for(let i in num){
    console.log(i)
}