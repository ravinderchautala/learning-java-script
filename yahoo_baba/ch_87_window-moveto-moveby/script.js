let myWindow;
function openWindow(){
    myWindow = window.open("https://www.youtube.com/watch?v=Z0DmSWJyunc","_blank","width=500px,height=300px")
    myWindow.document.write("<p>This is My Window</p>")
}
function moveWindow(){
//  myWindow.moveTo(100,100)
 myWindow.moveBy(100,100)
 myWindow.focus()
}