const names = ["Ravinder", "Jatta"]
const lastName = "Chautala"
let newArray = []

for (let i = 0; i < names.length; i++) {
    newArray.push(`${names[i]} ${lastName}`)
}
console.log(newArray);