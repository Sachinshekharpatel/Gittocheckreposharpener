console.log("inside axios CRUD Operation.js");
let btn = document.getElementById('btn');

  btn.addEventListener('click',addexpense);

let parentul = document.getElementById('parentul');

function deletedata(id){
//   console.log(id);
  axios.delete(`https://crudcrud.com/api/9609069fa4824d1cb18e41c1015a1afc/usersdetails/${id}`)
  .then(()=>{
    addtoDom();
  })
}




addtoDom()
function addtoDom(){
    axios.get('https://crudcrud.com/api/9609069fa4824d1cb18e41c1015a1afc/usersdetails')
    .then((res)=>{
        // console.log(res.data);
        parentul.innerHTML = null;
        let x = res.data;
        for(let i=0;i<x.length;i++){
            
            let div = `<div><li>${x[i].value+"-"+x[i].discription+'-'+x[i].expense+" RS"}<button onclick="editdetail('${x[i]._id}')">Editdetail</button> <button onclick="deletedata('${x[i]._id}')"}'>DeleteItem</button></li></div>`
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

    axios.post('https://crudcrud.com/api/9609069fa4824d1cb18e41c1015a1afc/usersdetails',obj)
    .then((res)=>{
        // console.log(res.data) ;
        addtoDom();
    })
    .catch((err)=> console.log(err +"Inside Post request"))

   document.getElementById('categorySelect').value = null;
   document.getElementById('discription').value = null;
   document.getElementById('expense').value  = null ;
}

function editdetail(id){
    document.getElementById('categorySelect').value
    document.getElementById('discription').value
    document.getElementById('expense').value
    
    axios.get(`https://crudcrud.com/api/9609069fa4824d1cb18e41c1015a1afc/usersdetails/${id}`)
     .then((res)=>{
    
       let x = res.data;
    //    console.log(x);
       document.getElementById('categorySelect').value = null;
       document.getElementById('discription').value = x.discription;
       document.getElementById('expense').value = x.expense;

       deletedata(id);
      addtoDom();
  })
}