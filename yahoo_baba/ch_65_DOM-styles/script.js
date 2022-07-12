var element;

// element = document.querySelector("#header").style.backgroundColor = "darkblue";

// element = document.querySelector("#header").style.color = "red";

// element = document.querySelector("#header").style.border;

document.querySelector("#header").className = "xyz abc";

// element = document.querySelector("#header").className;

document.querySelector("#header").classList = "xyz abc";
document.querySelector("#header").classList.add("color");
document.querySelector("#header").classList.remove("abc");
element = document.querySelector("#header").classList;

console.log(element);