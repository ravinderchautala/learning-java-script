// click - fires after full ction occurs
// mouseDown - button is pressed
// mouseUp - button is released
// mouseEnter - moved onto an element
// mouseLeave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    console.log('you clicked me');
})
btn.addEventListener('mousedown', function () {
    console.log('mouse down');
})
btn.addEventListener('mouseup', function () {
    console.log('mouse up');
})
btn.addEventListener('mouseleave', function () {
    console.log('mouse out');
})
btn.addEventListener('mouseenter', function () {
    console.log('mouse Entered');
})