// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// newElement.appendChild(newText)

var target = document.getElementById("test");

// insertAdjacentHTML
// var newElement = "<h2>This is heading</h2>"
// target.insertAdjacentHTML('beforeend',newElement);

// insertAdjacentElement
// target.insertAdjacentElement('afterbegin',newElement);

// insertAdjacentText
var newText = "This is Text";
target.insertAdjacentText('afterend',newText);

console.log(newElement);
console.log(newText);