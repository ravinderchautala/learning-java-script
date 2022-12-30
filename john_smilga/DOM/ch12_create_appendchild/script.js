//  createElement('element)
// createTextNode('Etxt Content)
// element.appendchild(child element)

// inseting element directly to the body
const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);


// inserting element to the specific element
const heading = document.createElement('h2');

const contnt = document.createTextNode("i'm heading through js");
heading.appendChild(contnt);
result.appendChild(heading);



