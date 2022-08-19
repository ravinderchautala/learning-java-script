// map
// does return a new array
// does not chnage size of original arrray
// uses value from the original aarya when making a new array


const people =[
    {name:'Vinita',age:23,position:'developer'},
    {name:'Annu',age:21,position:'Math expert'},
    {name:'Ravinder',age:23,position:'designer'}
]

const ages = people.map(function (person){
    console.log(person)
    return "heelo"
})
console.log(ages)