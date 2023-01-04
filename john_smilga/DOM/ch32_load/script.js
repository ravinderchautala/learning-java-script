



window.addEventListener('load', function () {
    console.log('i will run second');
    const image = document.querySelector('img');
    console.log(image);
    console.log(image.width);
})
window.addEventListener('DOMContentLoaded', function () {
    console.log('i will run first');
    const image = document.querySelector('img');
    console.log(image);
    console.log(image.width);
})