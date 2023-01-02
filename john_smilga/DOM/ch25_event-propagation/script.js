const list = document.querySelector('.list-items');
const container = document.querySelector('.container');

function showBubbling(e) {
    console.log(`current Target `, e.currentTarget);
    console.log(`target `, e.target);
    if (e.target.classList.contains('link')) {
        // console.log('you clicked on a link');
    }
}
function stopPropagation(e) {
    console.log('you clicked on a list');
    e.stopPropagation();
}
list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });