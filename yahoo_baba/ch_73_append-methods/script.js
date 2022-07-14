var newElement = document.createElement("h2");

var newText = document.createTextNode("This is just text");

newElement.appendChild(newText);

// document.getElementById("test").appendChild(newElement);

var target = document.getElementById("test");

target.insertBefore(newElement, target.childNodes[0]);

console.log(newElement);
console.log(newText);