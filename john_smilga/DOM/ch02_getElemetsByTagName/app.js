const headings = document.getElementsByTagName('h1');
headings[0].style.color = 'red';
console.log(headings.length);

const item = document.getElementsByTagName('li');
item[2].style.color = 'orange';
const betterItem = [...item];

betterItem.forEach(function (items) {
    console.log(items);
})
console.log(item);
console.log(betterItem);