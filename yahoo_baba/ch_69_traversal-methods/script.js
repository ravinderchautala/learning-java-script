document.getElementById("inner").parentElement.style.backgroundColor = "red";
document.getElementById("child-3").parentNode.style.backgroundColor = "blue";

var a = document.getElementById("main").parentElement;
var b = document.getElementById("main").parentNode;

console.log(a);
console.log(b);