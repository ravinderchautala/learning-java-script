// firstElementChild
document.getElementById("inner").firstElementChild.style.backgroundColor = "brown";

// lastElementChild
document.getElementById("inner").lastElementChild.style.backgroundColor = "black";

// previousElementSibling
var b = document.getElementById("child-3").previousElementSibling.innerHTML;

// nextElementSibling
var a = document.getElementById("child-3").nextElementSibling.innerHTML;

// previousSibling
var c = document.getElementById("child-3").previousSibling;

// nextSibling
var d = document.getElementById("child-3").nextSibling;

console.log(a);
console.log(b);
console.log(c);
console.log(d);