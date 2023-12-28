console.log("inside axios CRUD Operation.js");
let btn = document.getElementById('btn');

  btn.addEventListener('click',addexpense);

let parentul = document.getElementById('parentul');

 if(!localStorage.getItem('Allexpense')){
    localStorage.setItem('Allexpense', JSON.stringify(new Array));
 } 

 function deletedata(e){
    e.preventDefault();
    let data = localStorage.getItem('Allexpense');
    let parse = JSON.parse(data);
    let items = document.getElementById('parentul');
    
    let todel = e.target.parentElement
    let splice1 = todel.id 
    items.removeChild(todel)
    parse.splice(splice1,1);

    console.log(parse);
    let x = JSON.stringify(parse)
    localStorage.setItem('Allexpense', x);
}

axios.get("https://crudcrud.com/api/6588c2b233124e43935224842ae01655/userdetail")
     .then((res)=>{
      let x = res.data;
      // console.log(x);
      parentul.textContent = null; 
      for(let i=0;i<x.length;i++){
    
        let div  = document.createElement('div');
        div.className='parentdiv';
        div.id = i;
        div.style.display='flex';
        let li = document.createElement('li');
        
        let editbtn = document.createElement('button');
        editbtn.innerText = "Edit Detail" ;
        editbtn.style.marginRight='30px' ;
        editbtn.style.marginLeft='30px' ;
        let dltbtn = document.createElement('button');
       
        dltbtn.innerText = "Delete Item";
        dltbtn.addEventListener("click",deletedata)
        editbtn.addEventListener("click",editdetail);
    
        li.innerHTML = x[i].value +" - "+ x[i].discription+" - "+ x[i].expense+"Rs";
        div.appendChild(li);
        div.appendChild(editbtn)
        div.appendChild(dltbtn);
        parentul.appendChild(div);
    
        
       }
      
     })
     .catch((err)=>console.log(err))
    
// addexpense();
    // localStorage.setItem('Allexpense',JSON.stringify(y))
    let getallexpense = localStorage.getItem('Allexpense');
    let y = JSON.parse(getallexpense) 
    // Below DOM Functionality  
    // parentul.textContent = null; 
    // console.log(y[y.length-1].expense)
    //   console.log(y)
    
    // for(let i=0;i<y.length;i++){
    
    //     let div  = document.createElement('div');
    //     div.className='parentdiv';
    //     div.id = i;
    //     div.style.display='flex';
    //     let li = document.createElement('li');
        
    //     let editbtn = document.createElement('button');
    //     editbtn.innerText = "Edit Detail" ;
    //     editbtn.style.marginRight='30px' ;
    //     editbtn.style.marginLeft='30px' ;
    //     let dltbtn = document.createElement('button');
       
    //     dltbtn.innerText = "Delete Item";
    //     dltbtn.addEventListener("click",deletedata)
    //     editbtn.addEventListener("click",editdetail);
    
    //     li.innerHTML = y[i].value +" - "+ y[i].discription+" - "+ y[i].expense+"Rs";
    //     div.appendChild(li);
    //     div.appendChild(editbtn)
    //     div.appendChild(dltbtn);
    //     parentul.appendChild(div);
    
        
    // }



function addexpense(){
  
    let value= document.getElementById('categorySelect').value
    let discription = document.getElementById('discription').value
    let expense = document.getElementById('expense').value
    
    let getallexpense = localStorage.getItem('Allexpense');
    let y = JSON.parse(getallexpense) 
    // let id = y.length+1;
        let obj = {
        'value':value,
        'discription':discription,
        'expense':expense,
        // 'id': id,
       } 
     
     let x = y.push(obj);

     axios.post("https://crudcrud.com/api/6588c2b233124e43935224842ae01655/userdetail",obj)
     .then((res)=>{
      console.log(res.data);
      
     })
     .catch((err)=>console.log(err))
   
     location.reload()
    // localStorage.setItem('Allexpense',JSON.stringify(y))
    // getallexpense = localStorage.getItem('Allexpense');
    // y = JSON.parse(getallexpense) 
    // // Below DOM Functionality  
    // parentul.textContent = null; 
    // // console.log(y[y.length-1].expense)
    
    
    // for(let i=0;i<y.length;i++){
       
    //    {
    //     let div  = document.createElement('div');
    //     div.className='parentdiv';
    //     div.id = i;
    //     div.style.display='flex';
    //     let li = document.createElement('li');
        
    //     let editbtn = document.createElement('button');
    //     editbtn.innerText = "Edit Detail" ;
    //     editbtn.style.marginRight='30px' ;
    //     editbtn.style.marginLeft='30px' ;
    //     let dltbtn = document.createElement('button');
       
    //     dltbtn.innerText = "Delete Item";
    //     dltbtn.addEventListener('click',deletedata)
    //     editbtn.addEventListener('click',editdetail);
    
    //     li.innerHTML = y[i].value +" - "+ y[i].discription+" - "+ y[i].expense+"Rs";
    //     div.appendChild(li);
    //     div.appendChild(editbtn)
    //     div.appendChild(dltbtn);
    //     parentul.appendChild(div);
    
    //     }
    // }

    document.getElementById('categorySelect').value=""
    document.getElementById('discription').value=""
    document.getElementById('expense').value=""
    
  }





function editdetail(e){
    
    e.preventDefault();

    let data = localStorage.getItem('Allexpense');
    let parse = JSON.parse(data);
    let items = document.getElementById('parentul');
    
    let todel = e.target.parentElement
    let splice1 = todel.id 
    document.getElementById('categorySelect').value= parse[splice1].value;
    document.getElementById('discription').value= parse[splice1].discription;
    document.getElementById('expense').value =parse[splice1].expense
    items.removeChild(todel)
    parse.splice(splice1,1);

    //  console.log();
    let x = JSON.stringify(parse)
    localStorage.setItem('Allexpense', x);
    

}