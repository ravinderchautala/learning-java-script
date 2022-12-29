// next sibling
const first = document.querySelector('.first');
console.log(first);
const second = first.nextSibling.nextSibling.style.color = 'red';
console.log(second);

// previous sibling
const last = document.querySelector('.last');
console.log(last);
const secondLast = last.previousSibling.previousSibling;
console.log(second);
