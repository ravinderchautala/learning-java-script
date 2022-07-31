let obj = {
  Ravinder: 45,
  Vinita: 100,
  Jatta: 50,
  Anu: 100
}
/*// Problem 1
  for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of "+ Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]])
  }*/

/*// problem 2
for (let key in obj) {
  console.log("The marks of " + key + " are " + obj[key])
}*/

/*// problem 3
let b = 10
let a = prompt("Enter a Number")
a = Number.parseInt(a);
while(a!=b){
  a = prompt("Try Again!!!!!!")
}*/

// problem 4 
let mean = (a,b,c,d,e) => {
 return (a+b+c+d+e)/5;
}
console.log(mean(25,35,435,43,342))