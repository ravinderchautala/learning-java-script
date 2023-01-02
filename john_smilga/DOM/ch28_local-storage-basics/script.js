const friends = ['Vinita', 'Annu', 'ravinder'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

let fruits;
let count = 0;
if (localStorage.getItem('fruits')) {
    // localStorage.clear();
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else {
    fruits = [];
}

console.log(fruits);
// fruits.push('Apple');
fruits.push('Orange');
localStorage.setItem('fruits', JSON.stringify(fruits))