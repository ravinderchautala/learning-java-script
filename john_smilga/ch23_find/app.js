const people = [
    { name: 'Vinita', age: 23, position: 'developer', id: 1 },
    { name: 'Annu', age: 21, position: 'Math expert', id: 2 },
    { name: 'Ravinder', age: 23, position: 'designer', id: 3 }
]

const person = people.find(function (person) {
    return person.id === 1;
})
console.log(person);