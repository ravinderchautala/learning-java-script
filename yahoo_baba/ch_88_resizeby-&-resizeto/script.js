let myWindow;
function openWindow(){
    myWindow = window.open("https://www.youtube.com/watch?v=Z0DmSWJyunc","_blank","width=500px,height=300px")
    myWindow.document.write("<p>This is My Window</p>")
}
function resizeWindow(){
// myWindow.resizeTo(500,500)
myWindow.resizeBy(100,100)
}