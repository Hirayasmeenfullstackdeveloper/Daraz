
let div=document.getElementById("MultiplicationTable")
let number =parseInt(prompt("enter number"));
let limit =parseInt(prompt("enter limit"));
let x ="";
document.write('<table border="3" cellspacing="3">');
for (let i = 1; i <=limit ; i++){
    document.write("<tr><td bgcolor=white>" + number + "x" +i+ "=" + number*i + " </td> </tr>");
    }
    document.write ("</table>");

div.innerHTML=x;