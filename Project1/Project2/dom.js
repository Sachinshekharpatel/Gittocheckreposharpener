// parentelement && lastElement child &&firstelemnt && nextElementSibling
let child = document.querySelectorAll(".list-group-item");
// console.log(child.lastElementChild);
// console.log(child.parentElement);

// console.log(child.firstElementChild)
// Previoselementsibling
// console.log(child[1].previousElementSibling)

// Childcreated

// let createchild = document.createElement('p');
// createchild.textContent="CreatedChild";
// let parent = document.querySelector("#items");
// parent.appendChild(createchild);
// console.log(createchild)

// insertbefore Element Header part ;
// let elementcreated = document.createElement('h3');
// elementcreated.textContent="Hello World Created By Js"
// let parent = document.querySelector('.container')
// let h1 = document.querySelector("#header-title");
// console.log();
// parent.insertBefore(elementcreated,h1);
// console.log(h1);

// insert element beforeitem named hello in it 

let elementcreated = document.createElement('p');
elementcreated.textContent="This hello Created By Js for above item1"
let parent = document.querySelector('#items')
let h1 = document.querySelector(".list-group-item");
// console.log();
parent.insertBefore(elementcreated,h1);
// console.log(h1.textContent);












