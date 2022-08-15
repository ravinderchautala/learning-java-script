// Truthy and Falsy
// '',"",``,0,-0,NaN , false ,Null, undefined -- gives false

const text = ''

if(text){
    console.log("This is Truthy")
}else{
    console.log("This is Falsy")
}