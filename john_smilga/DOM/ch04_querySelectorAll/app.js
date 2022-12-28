const result = document.querySelector('#result');
result.style.backgroundColor = 'red';

const item = document.querySelector('.special');
console.log(item);

const list = document.querySelectorAll('.special');
list.forEach(function (item) {
    console.log(item);
    item.style.color = "yellow";
})