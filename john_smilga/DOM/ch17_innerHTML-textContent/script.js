const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');
console.log(div.textContent);
console.log(list.innerHTML);

const ul = document.createElement('ul');
ul.innerHTML = list.innerHTML;
document.body.appendChild(ul);
div.textContent = 'Hello People';