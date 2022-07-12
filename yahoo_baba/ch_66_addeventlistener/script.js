var element;

// document.getElementById("outer").onclick = abc;
// document.getElementById("inner").onmouseenter = xyz;

document.getElementById("inner").addEventListener("mouseenter", xyz);
document.getElementById("outer").addEventListener("click", remove);
document.getElementById("outer").addEventListener("click", function(){
    // document.getElementById("outer").style.border = "5px solid green";
    this.style.border = "5px solid green";
});

function abc(){
    document.getElementById("outer").style.background = "grey";

}
function xyz(){
    document.getElementById("inner").style.background = "blue";
}

// removeEventListener
document.getElementById("outer").addEventListener("mouseleave", abc);

function remove(){
    document.getElementById("outer").removeEventListener("mouseleave", abc);
}