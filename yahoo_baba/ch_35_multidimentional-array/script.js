var ary = [
    ["Vinita", 25, "Female","Msc"],
    ["Ravinder",23,"Male","B.tech"],
    ["Jatta",23,"Male","B.tech"],
    ["Anu",25,"Female","M.sc"]
]
document.write("<table border='1px' cellspacing='0'>")
for(var a=0; a<ary.length;a++){
    document.write("<tr>");
    for(var b=0; b<ary[a].length;b++){
        document.write("<td>"+ary[a][b]+"</td> ");
    }document.write("</tr>");
}