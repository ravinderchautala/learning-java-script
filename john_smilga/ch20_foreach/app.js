// forEach
// does not return an array

const people =[
    {name:'Vinita',age:23,position:'developer'},
    {name:'Annu',age:21,position:'Math expert'},
    {name:'Ravinder',age:23,position:'designer'}
]

function person(item){
    console.log(item.age)
}
people.forEach(person)

people.forEach(function (item){
    console.log(item.name);
})