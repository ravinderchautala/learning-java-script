// arrow function
let sum = (a,b) => {
    return a+b
}
console.log(sum(786,90))
let obj = {
    Ravinder: 45,
    Vinita : 100,
    Jatta: 50,
    Anu: 100
  }
  /*// Problem 1
  for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of "+ Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]])
  }*/
  // problem 2
  for (let key in obj){
    console.log("The marks of "+ key + " are "+ obj[key])
  }