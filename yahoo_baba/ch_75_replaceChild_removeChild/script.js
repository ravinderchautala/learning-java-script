var newElement = document.createElement("li");
var newText = document.createTextNode("New Text");

newElement.appendChild(newText);

var target = document.getElementById("list");
var oldElement = target.children[1];

// console.log(oldElement);
// replaceChild
// target.replaceChild(newElement,oldElement);

// removeChild
target.removeChild(oldElement);