let arr = [43,56,76,54]

// Array map method
arr.map((value,index,array) =>{ //gives a new array
    console.log(value,index,array)
})
let a = arr.map((value) =>{
    console.log(value)
    return value+2
})
console.log(a)

// Array filter method
let arr2 = [36,35,54,78,25,87]
let ab = arr2.filter((value)=>{
    return value>50
})
console.log(ab)


// Array filter method
let arrR = arr2.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arrR)