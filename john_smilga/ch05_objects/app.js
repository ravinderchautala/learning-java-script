const person = {
    name: "vinita",
    lastName: "Ravinder",
    age: 23,
    education: "M.Sc",
    relation: true,
    marks: [99, 98, 97, 95],
    greetings: function () {
        console.log('Hello Vini')
    }
}
const age = person.age
console.log(age)
person.name = "Vinita"
console.log(person.name)
console.log(person.marks[2])
person.greetings()