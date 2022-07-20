// document.getElementsByTagName("input").addEventListener("focus",focusFunction(this));
// document.getElementsByTagName("input").addEventListener("blur",blurFunc(this));

function focusFunction(element){
    element.style.background = "aqua";
}
function blurFunc(element){
    element.style.background = "";
}
function inputFunc(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}