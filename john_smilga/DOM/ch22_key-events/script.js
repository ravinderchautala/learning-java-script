
const nameInout = document.getElementById('name');

// preesing a key
// nameInout.addEventListener('keypress', function () {
//     alert('you pressed a key');
// })

// press down a key
// nameInout.addEventListener('keydown', function () {
//     alert('you pressed a key');
// })

// pressout from the key
nameInout.addEventListener('keyup', function () {
    console.log(nameInout.value);
})