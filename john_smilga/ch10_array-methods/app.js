let names = ['Vinita', 'Ravinder','Anu','Jatta','Kachari']

// length
console.log(names.length)
console.log(names[4])

// concat
const lastName = ['Rahar','Rolan','Choudhary']
const allNames = names.concat(lastName)
console.log(allNames)

// reverse
console.log(allNames.reverse())

// unshift
allNames.unshift('chautala')
allNames.unshift('Kachar ko beej')
console.log(allNames)

// shift
allNames.shift()
allNames.shift()
allNames.shift()
allNames.shift()
console.log(allNames)

// push
allNames.push('chautala')
allNames.push('Kachar ko beej')
console.log(allNames)

// pop
allNames.pop()
allNames.pop()
console.log(allNames)

// splice- mutates the original array
const sn = allNames.splice(2)
console.log(sn)
console.log(allNames)