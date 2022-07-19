
var target = document.getElementById("list1").children[1];
var copyElement = target.cloneNode(true);

console.log(copyElement);


document.getElementById("list2").appendChild(copyElement);