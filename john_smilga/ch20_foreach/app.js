// forEach
// does not return an array

const people = [
    {
        name: 'jatta', age: 23, position: 'developer'
    },
    { name: 'Chuatala', age: 21, position: 'engineer' },
    { name: 'Ravinder', age: 23, position: 'designer' }
]

function showPerson(person) {
    console.log(person.age)
}

people.forEach(showPerson);

people.forEach(person => {
    console.log(person.name);
})