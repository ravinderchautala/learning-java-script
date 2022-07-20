let a = 0;
 let b =setInterval(Anim,100);

function Anim(){
    a = a+10;
    if(a==400){
        clearInterval(b);
    }else{
        let target =document.getElementById("test");
        target.style.marginLeft = a +'px';
    }
 }
    