const form = document.getElementById('form');
const name = document.getElementById('text');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form is submitted');
    console.log(name.value);
    console.log(password.value);
})