const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');
const link = document.getElementById('link')

// cureentTarget
heading.addEventListener('click', function (event) {
    console.log(event.currentTarget);
})

btn.addEventListener('click', function (event) {
    event.currentTarget.classList.add('blue');
    console.log(event.type); //event type 
})

function someFunc(e) {
    e.preventDefault();
}
link.addEventListener('click', someFunc)

// this keyword
heading.addEventListener('click', function (event) {
    this.classList.add('blue');
})