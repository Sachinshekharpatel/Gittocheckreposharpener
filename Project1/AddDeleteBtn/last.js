console.log("Inside Last.js file of adddeletebutton")

var form = document.getElementById('addForm')
var items = document.getElementById('items')
form.addEventListener('submit', additemtoli);

var delbtn = document.getElementById("items");
delbtn.addEventListener('click',DelFunction);

//deletefunction
function DelFunction(e){
    e.preventDefault();
   if(e.target.className=="btn btn-danger btn-sm float-right delete"){
    var parent = e.target.parentElement
    // console.log(parent);
    parent.remove();
   }
    
}
// console.log(items.length)
// editbutton functionality
var listitems = document.querySelectorAll('.list-group-item');

 for(let i=0;i<4;i++){
    let editbtn = document.createElement('button');
    editbtn.className ="btn btn-danger btn-sm float-right editbtn"
    editbtn.textContent = "EDIT";
    listitems[i].appendChild(editbtn);
 }
// additem functionality and 

function additemtoli(e){
    e.preventDefault();
    let text = document.getElementById("item").value
    if(text.length>0){
        let newli = document.createElement('li');
        newli.className='list-group-item';
        newli.textContent=text;
        // console.log(newli)
        let btn = document.createElement('button');
        btn.className ="btn btn-danger btn-sm float-right delete"
        btn.textContent = "X";
        
        let editbtn = document.createElement('button');
        editbtn.className ="btn btn-danger btn-sm float-right editbtn"
        editbtn.textContent = "EDIT";

        // newli.appendChild(editbtn)
        newli.appendChild(btn);
        newli.appendChild(editbtn)
        items.appendChild(newli)
    }
   
    
}



