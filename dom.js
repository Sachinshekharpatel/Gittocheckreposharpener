console.log("Inside Dom.js");
console.log(document.title);
document.title = "Sachin";
var header = document.getElementById("main-header");
header.style.borderBottom="2px solid red";

var additem = document.querySelector('.title');
additem.style.color='green';
additem.innerHTML='ADD ITEMS';

// #GetelementmyClassname
let list = document.getElementsByClassName("list-group-item");
for(let i=0;i<list.length;i++){
    if(i==2){
        list[i].style.color="green";
    }
    list[i].style.fontWeight="bold";
}


//Getelemtnbytagname
let tag = document.getElementsByTagName("li");
for(let i=0;i<tag.length;i++){
    if(i==2){
        tag[i].style.color="red";
    }
    tag[i].style.fontWeight="Bold";
    tag[i].style.backgroundColor="lightgrey";
}