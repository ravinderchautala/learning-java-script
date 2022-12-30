const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

first.className = 'colors text';

second.classList.add('colors', 'text');

second.classList.remove('text');

const check = third.classList.contains('colors');
if (!check) {
    third.classList.add('text');
}
console.log(check);