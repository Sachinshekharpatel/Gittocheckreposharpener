console.log("Inside Dom.js");
console.log(document.title);
document.title = "Sachin";
var header = document.getElementById("main-header");
header.style.borderBottom="2px solid red";

var additem = document.querySelector('.title');
additem.style.color='green';
additem.innerHTML='ADD ITEMS';



