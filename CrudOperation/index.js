// console.log("Inside Flipkart Type page");
// console.log(window);
// https://meet.google.com/qpn-kjup-eqz?pli=1

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
       
        let response = await axios.post("https://crudcrud.com/api/214b2eca9dac46359efe5b1ddf9e5660/product", obj);
 
        let id = response.data._id;
        
         
        if(obj.category=='electronics'){
            let append =`<li id="${id}">${obj.category}-${obj.sellingprice}-${obj.productname} <button onclick="deleteitem('${id}')">Delete</button></li>`;
            electronicul.innerHTML = electronicul.innerHTML + append;
        }else if(obj.category =='skincare'){
            let append =`<li id="${id}">${obj.category}-${obj.sellingprice}-${obj.productname} <button onclick="deleteitem('${id}')">Delete</button></li>`;
            skincareul.innerHTML = skincareul.innerHTML + append;
        }else{
            let append =`<li id="${id}">${obj.category}-${obj.sellingprice}-${obj.productname} <button onclick="deleteitem('${id}')">Delete</button></li>`;
            fooditemul.innerHTML = fooditemul.innerHTML + append;
        }

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
        let res=await axios.get('https://crudcrud.com/api/214b2eca9dac46359efe5b1ddf9e5660/product');
        // console.log(res.data);

        let x =res.data;
        console.log(x);

        electronicul.innerHTML =null;
        fooditemul.innerHTML =null;
        skincareul.innerHTML =null;

        for (let i=0;i<x.length;i++) {
            if(x[i].category=='electronics'){
                let append =`<li id="${x[i]._id}">${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
                electronicul.innerHTML = electronicul.innerHTML + append;
            }else if(x[i].category =='skincare'){
                let append =`<li id="${x[i]._id}">${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
                skincareul.innerHTML = skincareul.innerHTML + append;
            }else{
                let append =`<li id="${x[i]._id}">${x[i].category}-${x[i].sellingprice}-${x[i].productname} <button onclick="deleteitem('${x[i]._id}')">Delete</button></li>`;
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
         await axios.delete(`https://crudcrud.com/api/214b2eca9dac46359efe5b1ddf9e5660/product/${id}`);
         let ToDelete = document.getElementById(`${id}`);
         let parentElement = ToDelete.parentNode;
         parentElement.removeChild(ToDelete);
    }catch(err){
        console.log(err);
    }
}
