var now = new Date();

document.write(now.toDateString()+"<br>");
// get methods
document.write(now.getDate()+"<br>");
document.write(now.getFullYear()+"<br>");
document.write(now.getMonth()+"<br>");
document.write(now.getDay()+"<br>");
document.write(now.getHours()+"<br>");
document.write(now.getMinutes()+"<br>");
document.write(now.getSeconds()+"<br>");
document.write(now.getMilliseconds()+"<br>");
// set methods
now.setDate(20);
document.write(now+"<br>");