var str = "JavaScript is a great language is";
var strg = "     JavaScript     html";

var a = str.length;
var b = str.toLowerCase();
var c = str.toUpperCase();
var d = str.includes("great");
var e = str.startsWith("Java");
var f = str.endsWith("age");
var g = str.search("great");
var h = str.match(/is/g);
var i = str.indexOf("is");
var j = str.lastIndexOf("is");
var k = str.replace("JavaScript","Java");
var l = strg.trim();

document.write(a+"<br>");
document.write(b+"<br>");
document.write(c+"<br>");
document.write(d+"<br>");
document.write(e+"<br>");
document.write(f+"<br>");
document.write(g+"<br>");
document.write(h+"<br>");
document.write(i+"<br>");
document.write(j+"<br>");
document.write(k+"<br>");
document.write(l+"<br>");