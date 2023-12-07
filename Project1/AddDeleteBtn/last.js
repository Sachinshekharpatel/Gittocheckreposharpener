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
    let discription = document.getElementById("discription").value
    
    if(text.length>0 && discription.length>0){
        let newli = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = " "+discription ;
        span.className='span';
        newli.appendChild(span);
        newli.className='list-group-item';
        newli.textContent=text+" "+discription;
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

// function filter && discription below of item list

let filter = document.getElementById('filter');

filter.addEventListener('keyup',filterbytext)

function filterbytext (e){
   let text = e.target.value.toLowerCase();
   let list = document.querySelectorAll('li');
   list.forEach(function(item){
     let val = item.firstChild.textContent.toLowerCase();
    
     if(val.includes(text)){
        
        item.style.display = "block";

     }else {
        item.style.display = "none"        
     }
   })
}



