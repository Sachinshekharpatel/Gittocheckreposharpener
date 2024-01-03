// console.log("Inside Flipkart Type page");
// console.log(window);

async function addproduct(){
    let sellingprice = document.getElementById('sellingprice').value;
    let productname =document.getElementById('productname').value;
    let category =document.getElementById('categoryselect').value;
    // console.log(obj);
    let obj={
        sellingprice:sellingprice,
        productname:productname,
        category:category
    };

    try{
        await axios.post("https://crudcrud.com/api/743c894ac2734eeebbb09e0a1733a084/product",obj);
        location.reload()
        document.getElementById('sellingprice').value = null;
        document.getElementById('productname').value =null;
        document.getElementById('categoryselect').value = null;

    }catch(err){
        console.log(err);
    }
}

let electronicul =document.getElementById('electronicul');
let fooditemul =document.getElementById('fooditemul');
let skincareul =document.getElementById('skincareul');

addtodom();

async function addtodom(){
    try{
        let res=await axios.get('https://crudcrud.com/api/743c894ac2734eeebbb09e0a1733a084/product');
        // console.log(res.data);

        let x =res.data;
        console.log(x);

        electronicul.innerHTML =null;
        fooditemul.innerHTML =null;
        skincareul.innerHTML =null;

        for (let i=0;i<x.length;i++) {
            if(x[i].category=='electronics'){
                let append =`<li>${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
                electronicul.innerHTML = electronicul.innerHTML + append;
            }else if(x[i].category =='skincare'){
                let append =`<li>${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
                skincareul.innerHTML = skincareul.innerHTML + append;
            }else{
                let append =`<li>${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
                fooditemul.innerHTML = fooditemul.innerHTML + append;
            }
        }
    }catch(err){
        console.log(err);
    }
}

async function deleteitem(id) {
    // console.log(id,"InsideDeleteBtn");
    try{
        await axios.delete(`https://crudcrud.com/api/743c894ac2734eeebbb09e0a1733a084/product/${id}`);
       window.location.reload()
    }catch(err){
        console.log(err);
    }
}
