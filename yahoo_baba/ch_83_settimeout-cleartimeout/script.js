let b = setTimeout(Anim, 3000);

function Anim() {
    let target = document.getElementById("test");
    target.style.width = "500px";
}
function stopAnim(){
    clearTimeout(b);
}