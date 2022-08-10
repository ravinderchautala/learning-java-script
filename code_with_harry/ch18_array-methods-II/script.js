let num = [1, 521, 340, 412, 33]
let num1 = [111, 142, 132, 154, 195]


// delete num[1]
// console.log(num)
// console.log(num.length)

let newArray = num.concat(num1)
console.log(newArray)

console.log(newArray.sort()) // this sorting is based on 1st number of the string
// function to sort on the basis of number
let compare =(a,b) => {
    return a-b
}
console.log(newArray.sort(compare))

num.reverse()
console.log(num)

// splice and splice
num = [1,2,3,4,5,63,376,37]
num.splice(2,3,1023,1024,1025,1026)
console.log(num)

let a = num.slice(5)
console.log(num)
console.log(a)