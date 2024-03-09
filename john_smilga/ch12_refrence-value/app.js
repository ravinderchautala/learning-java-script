// by value
const num = 1;
let num2 = num;
num2 = 7;
console.log(num);
console.log(num2);

// by reference
const obj = { name: "Ravinder" };
let obj1 = obj;
obj1.name = "Jatta";
console.log(obj.name); //result:Jatta
console.log(obj1.name);//result:Jatta


// solution
const obj2 = { name: "Ravinder" };
let obj3 = { ...obj2 };
obj3.name = "Jatta";
console.log(obj2.name); //result: Ravinder
console.log(obj3.name); //result: Jatta