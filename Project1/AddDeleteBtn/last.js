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

// additem functionality

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
        newli.appendChild(btn);
        items.appendChild(newli)
    }
   
    
}



