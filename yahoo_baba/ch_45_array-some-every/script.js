var ages =[24,23,18,20];

var b = ages.some(checkAdult);
document.write(b+ "<br>")
var c = ages.every(checkAdult);
document.write(c+ "<br>")

function checkAdult(age){
    return age>=18;
}