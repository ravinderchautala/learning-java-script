// 1st challenge -Variables
let firstName = "Vinita"
let last_name = "Ravinder"
let address = "main street"
address = "first street"
console.log(firstName)
console.log(last_name)
console.log(address)

// 2nd challenge - Concating Strings
let street, country;
street = "Bas Gokal"
country = "India"
let fullMailingAddress = street +" "+country
console.log(fullMailingAddress)

//  3rd challenge - numbers
let score1, score2,score3;
score1 = 99
score2 = 95
score3 = 92
let total = score1+score2+score3
let average = total/3
console.log(total)
console.log(average)
let plates = 20
let people = 7
let rp = plates%people
rp++
const message = "There are "+rp + " plates available"
console.log(message)

// 4th challenge - Arrays
let fruits = ["Mango",'Banana','Watermelon','Lichi','Grapes',35]
let firstFruit = fruits[0]
fruits[fruits.length-1]="kela"
console.log(firstFruit)
console.log(fruits)

// 5th challenge - Functions
let calculateTotal = (subTotal,tax) =>{
    return subTotal+tax
}
let order1,order2,order3;
order1 = calculateTotal(354,34)
order2 = calculateTotal(39867,490)
order3 = calculateTotal(43354,534)
console.log(order1,order2,order3)
const calculateTotal1 = function(subTotal,tax) {
    return subTotal+tax
}