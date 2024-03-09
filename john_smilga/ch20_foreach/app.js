// forEach
// does not return an array

const people = [
    {
        name: 'jatta', age: 23, position: 'developer'
    },
    { name: 'Chuatala', age: 21, position: 'engineer' },
    { name: 'Ravinder', age: 23, position: 'designer' }
]

function person(item) {
    console.log(item.age)
}
people.forEach(person)

people.forEach(function (item) {
    console.log(item.name);
})