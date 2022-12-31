const result = document.querySelector('#result');
const heading = document.createElement('h2');
const text = document.createTextNode('dynamic heading');

const bodyDiv = document.createElement('div');

// create text node
const text2 = document.createTextNode('a simple body div');

bodyDiv.appendChild(text2);
document.body.insertBefore(bodyDiv, result);

heading.appendChild(text);
// document.body.appendChild(heading);
result.appendChild(heading);
document.body.replaceChild(heading, bodyDiv)