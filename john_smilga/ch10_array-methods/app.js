const names = ['Vinita', 'Ravinder', 'Annu', 'Jatta', 'Kachari']

// length
console.log(names.length)
console.log(names[2])

const lastNames = ['Rolan', 'Rolan', 'Rahar', 'Rahar', 'Hupp'];
const allNames = names.concat(lastNames);
// console.log(allNames);
// console.log(allNames.reverse());

// unshift
allNames.unshift('kachar')
allNames.unshift('tinger')
console.log(allNames);

allNames.shift()
allNames.shift()
allNames.shift()
allNames.shift()
console.log(allNames);

allNames.push('Vinita')
allNames.push('Ravinder')
console.log(allNames);


allNames.pop()
allNames.pop()
allNames.pop()
allNames.pop()
console.log(allNames);

// splice - mutates original array
const special = allNames.splice(0, 2);
console.log(special);
console.log(allNames);