var parentElement = document.getElementById("outer");
// var target = document.getElementById("inner");
var target = document.getElementById("child-3");

var find = parentElement.contains(target);

console.log(find);