const person = {
    name: "Chautala",
    lastName: "Ravinder",
    age: 23,
    education: "B.tech",
    relation: false,
    marks: [99, 98, 97, 95],
    greetings: function () {
        console.log('Hello Ravi')
    }
}
const age = person.age
console.log(age)
person.name = "Ravinder"
console.log(person.name)
console.log(person.marks[2])
person.greetings()