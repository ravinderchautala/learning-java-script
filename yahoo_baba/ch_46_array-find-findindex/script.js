var ages =[10,23,19,20];

var b = ages.find(checkAdult);
document.write(b+ "<br>")
var c = ages.findIndex(checkAdult);
document.write(c+ "<br>")

function checkAdult(age){
    return age>=18;
}