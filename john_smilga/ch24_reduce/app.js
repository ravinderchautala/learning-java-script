const people = [
    { name: 'Vinita', age: 23, position: 'developer', id: 1, Salary: 500 },
    { name: 'Ravinder', age: 23, position: 'designer', id: 2, Salary: 400 },
    { name: 'Annu', age: 21, position: 'The Boss', id: 3, Salary: 300 },
    { name: 'Jatta', age: 21, position: 'employee', id: 4, Salary: 200 }
]

const total = people.reduce(function (acc, curItem) {
    console.log(`Total ${acc}`);
    console.log(`Current money ${curItem.Salary}`);
    acc += curItem.Salary;

    return acc;
}, 0)
console.log(total);