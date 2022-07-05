var ages =[10,23,19,20];

var b = ages.filter(checkAdult);
document.write(b+ "<br>");

function checkAdult(age){
    return age>=18;
}