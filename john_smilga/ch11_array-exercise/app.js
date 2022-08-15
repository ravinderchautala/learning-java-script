const names = ["Vinita","Annu","Ravinder","Jatta"]
const lastName = "Choudhary"
let newArray = []

for(let i=0;i<names.length;i++){
    newArray.push(`${names[i]} ${lastName}`)
}
console.log(newArray)