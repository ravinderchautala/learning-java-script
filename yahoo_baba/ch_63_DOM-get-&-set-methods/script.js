var element;
// for get the value
// element = document.getElementById("content").innerText;
// element = document.getElementById("content").innerHTML;
// element = document.getElementById("header").getAttribute("id");
// element = document.getElementById("header").getAttribute("class");
// element = document.getElementById("header").getAttribute("style");
// element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").attributes;

// for set the values
// document.getElementById("header").innerText = "Wow"
// document.getElementById("header").innerHTML = "<h1>Ravinder</h1>";
document.getElementById("header").setAttribute("style","border: 10px dotted green")
element = document.getElementById("header").getAttribute("class");
document.getElementById("header").removeAttribute("style");


console.log(element);