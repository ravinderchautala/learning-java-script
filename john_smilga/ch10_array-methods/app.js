const names = ['Chuatala', 'Ravinder', 'Developer', 'Jatta', 'Player']

// length
console.log(names.length)
console.log(names[1])
console.log(names[names.length - 1])

// concat
const lastNames = ['Rolan', 'Kumar', 'Albatross'];
const allNames = names.concat(lastNames)
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift- to add an item in front of the array
allNames.unshift('chucha');
console.log(allNames);

// shift - to delete an item from front of the array
allNames.shift();
console.log(allNames);

// push - to add an item in last of the array
allNames.push("Krishana");
allNames.push("Ram");
console.log(allNames);

// pop - to delete an item from the end of the array
allNames.pop();
console.log(allNames);

// splice - create a new array from another array and mutates the original one

let specificNames = allNames.splice(3, 2);
console.log(specificNames);
console.log(allNames);