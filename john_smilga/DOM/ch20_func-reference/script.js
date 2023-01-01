// select element
// addeventlistener
// add event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColor() {
    const check = heading.classList.contains('red');
    if (check) {
        heading.classList.remove('red');
    }
    else {
        heading.classList.add('red');
    }
}
btn.addEventListener('click', changeColor)