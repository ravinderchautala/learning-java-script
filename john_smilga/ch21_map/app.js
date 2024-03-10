// map
// does return a new array
// does not chnage size of original array
// uses value from the original array when making a new array


const people = [
    { name: 'Jatta', age: 23, position: 'developer' },
    { name: 'chautala', age: 21, position: 'The Boss' },
    { name: 'Ravinder', age: 23, position: 'designer' }
]

const ages = people.map(function (person) {
    return person.age;
})
const newPeople = people.map(function (person) {
    return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 }
})
console.log(newPeople)