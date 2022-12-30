//  createElement('element)
// createTextNode('Etxt Content)
// element.appendchild(child element)

// insertBefore('element','location')

// inseting element directly to the body
const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');


bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result)