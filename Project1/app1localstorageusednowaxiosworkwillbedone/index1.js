console.log("inside axios CRUD Operation.js");
let btn = document.getElementById('btn');

  btn.addEventListener('click',addexpense);

let parentul = document.getElementById('parentul');

function deletedata(id){
//   console.log(id);
  axios.delete(`https://crudcrud.com/api/0b23225eaa564f37a0ffc597a74a2781/usersdetails/${id}`)
  .then(()=>{
    addtoDom();
  })
}




addtoDom()
function addtoDom(){
    axios.get('https://crudcrud.com/api/0b23225eaa564f37a0ffc597a74a2781/usersdetails')
    .then((res)=>{
        console.log(res.data);
        parentul.innerHTML = null;
        let x = res.data;
        for(let i=0;i<x.length;i++){
            
            let div = `<div><li>${x[i].value+"-"+x[i].discription+'-'+x[i].expense+" RS"}<button>Editdetail</button> <button onclick="deletedata('${x[i]._id}')"}'>DeleteItem</button></li></div>`
            parentul.innerHTML = parentul.innerHTML + div ;
        }
    })
}

function addexpense(){
    let value= document.getElementById('categorySelect').value
    let discription = document.getElementById('discription').value
    let expense = document.getElementById('expense').value
    
    let obj = {
        value : value,
        discription : discription,
        expense : expense
    }

    axios.post('https://crudcrud.com/api/0b23225eaa564f37a0ffc597a74a2781/usersdetails',obj)
    .then((res)=>{
        console.log(res.data) ;
        addtoDom();
    })
    .catch((err)=> console.log(err +"Inside Post request"))

   document.getElementById('categorySelect').value = null;
   document.getElementById('discription').value = null;
   document.getElementById('expense').value  = null ;
}

function editdetail(){

}