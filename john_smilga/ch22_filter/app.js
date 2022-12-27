const people = [
    { name: 'Vinita', age: 23, position: 'developer' },
    { name: 'Annu', age: 21, position: 'Math expert' },
    { name: 'Ravinder', age: 23, position: 'designer' }
]

const newPeople = people.filter(function (person) {
    return person.age > 21;
})
console.log(newPeople);