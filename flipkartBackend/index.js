console.log("Inside Flipkart Type page");

function addproduct(){
    let sellingprice = document.getElementById('sellingprice').value
    let productname = document.getElementById('productname').value;
    let category = document.getElementById('categoryselect').value;

    let obj = {
        sellingprice : sellingprice,
        productname : productname,
        category : category
    }
    //  console.log(obj)
    axios.post("https://crudcrud.com/api/595d763640ac4c2ea5b421a3c0a5f31f/product", obj)
    .then((res)=>{
        // console.log(res.data)
        addtodom();
        document.getElementById('sellingprice').value = null ;
        document.getElementById('productname').value = null ;
        document.getElementById('categoryselect').value = null ;
    
    })
    .catch(err => console.log(err))

}


let electronicul = document.getElementById('electronicul');

let fooditemul = document.getElementById('fooditemul');

let skincareul = document.getElementById('skincareul');
addtodom();
function addtodom(){
    // console.log('addtodom')
      axios.get('https://crudcrud.com/api/595d763640ac4c2ea5b421a3c0a5f31f/product').then((res)=>{
            console.log(res.data)
            let x = res.data;
             console.log(x)
            electronicul.innerHTML = null ;
            fooditemul.innerHTML = null ;
            skincareul.innerHTML = null;

            for(let i=0;i<x.length;i++){
                if(x[i].category=='electronics'){
                       let append = `<li>${x[i].category+"-"+x[i].sellingprice+"-"+x[i].productname} <button onclick="deleteitem('${x[i]._id}')" >Delete</button></li>`;
                       electronicul.innerHTML  = electronicul.innerHTML + append ;
                }else if(x[i].category=='skincare'){
                    
                    let append = `<li>${x[i].category+"-"+x[i].sellingprice+"-"+x[i].productname} <button onclick="deleteitem('${x[i]._id}')" >Delete</button></li>`;
                    skincareul.innerHTML  = skincareul.innerHTML + append ;

                }else {
                     
                    let append = `<li>${x[i].category+"-"+x[i].sellingprice+"-"+x[i].productname} <button onclick="deleteitem('${x[i]._id}')" >Delete</button></li>`;
                    fooditemul.innerHTML  = fooditemul.innerHTML + append ;

                }
            }
        })
}


function deleteitem(id){
   console.log(id,"InsideDeleteBtn") ;
   axios.delete(`https://crudcrud.com/api/595d763640ac4c2ea5b421a3c0a5f31f/product/${id}`)
   .then((res)=>{addtodom()});
   
}