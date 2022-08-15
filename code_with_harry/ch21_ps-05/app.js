// Ques 1
// let arr= new Array;
// arr.length= prompt("How much numbers you want to add:")
// for(let i=0;i<arr.length;i++){
//     arr[i]=prompt("Enter a number")
// }
// console.log(arr)

// Ques 2
// let arr1= new Array;
// let n=1
// for(let i=0;i<n;i++){
//     arr1[i]=prompt("Enter a number")
//     if(arr1[i]==0){
//         console.log(arr1)
//     }else{
//         n++
//     }
// }

// Ques 3
// let arr2 = [10,30,90,80,60,34,56]
// let newArr = arr2.filter((value)=>{
//     return value%10==0
// })
// console.log(newArr)

// Ques 4
// let arr3 = [1,2,3,4,5,6]
// let newArr1 = arr3.map((h1)=>{
//         return h1*h1
// })
// console.log(newArr1)

// Ques 5
let arr4 = [1,2,3,4,5,6,7,8]
let newArr2 = arr4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(newArr2)