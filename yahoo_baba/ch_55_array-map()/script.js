var ary = [11,4,8,6,7];

var b = ary.map(test);
document.write(b+"<br>");

function test(x){
    return x*10;
}
 var e = [
    {fname:'Vinita',lname:'Rahar'},
    {fname:'Ravinder',lname:'Rolan'},
    {fname:'Vinita',lname:'Ravinder'},
    {fname:'Ravinder',lname:'Vinita'},
 ]

 var fullname = e.map(y);
 document.write(fullname);

 function y(x){
    return x.fname + " " + x.lname;
 }