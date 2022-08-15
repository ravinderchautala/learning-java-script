// by value
const num = 1
let num2 = num
num2 = 7
console.log(num)
console.log(num2)

// by reference
const obj ={name:"Vinita"}
let obj1 = obj
obj1.name = "Annu"
console.log(obj.name)  //result:Annu
console.log(obj1.name) //result:Annu


// solution
const obj2 ={name:"Vinita"}
let obj3 = {...obj2}
obj3.name = "Annu"
console.log(obj2.name)
console.log(obj3.name)