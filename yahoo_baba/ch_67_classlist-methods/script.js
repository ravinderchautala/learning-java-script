var element;

// document.getElementById("header").addEventListener("click", abc);
// function abc(){
//     document.getElementById("header").classList.add("xyz",);
// }
// document.getElementById("header").addEventListener("click", function(){
//     document.getElementById("header").classList.remove("green");
// } )

document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").classList.toggle("xyz",);
}

// element = document.getElementById("header").classList.length;
// element = document.getElementById("header").classList.item(1);
element = document.getElementById("header").classList.contains("abc");

console.log(element);