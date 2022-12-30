// getAttribute
// setAttribute
const first = document.querySelector('.first')
const idValue = first.getAttribute('id');
console.log(idValue);

const link = document.getElementById('link');
const last = link.nextElementSibling;
last.setAttribute('class', 'last');
last.textContent = 'I also have a class of last';
console.log(last);

const item = document.querySelectorAll('.first');
console.log(item);