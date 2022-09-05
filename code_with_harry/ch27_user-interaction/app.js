// alert("Hello Alert!!!")
let a = prompt("Enter a value of a", "609")
a = Number.parseInt(a)
let write = confirm("Do you want to write it write on the page")
if(write==true){
    document.write(a)
}else{
    alert("Please allow me to write it.")
}
alert("You entered the value in " + typeof(a))