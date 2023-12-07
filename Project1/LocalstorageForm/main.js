console.log("Inside Main_JS");
// localStorage.setItem("name",'sachin');

let form = document.getElementById('my-form')
form.addEventListener('submit',localstorage);


// console.log(localStorage.length);


function localstorage(e){
    e.preventDefault();
    // console.log("Inside locale")
    let text = document.getElementById('name').value
    let email = document.getElementById('email').value;
    let obj = {
        name : text,
        email : email
    }
    let string = JSON.stringify(obj);
    if(text.length>0 && email.includes('@') && email.length>1){
        localStorage.setItem(email,string) ;
        let items = document.querySelector('#items12');
       let li = document.createElement('li');
       li.classList = "item"
       li.textContent = email +" "+text;
       items.appendChild(li);
    //    console.log(li);
    }else{
        alert('Fields are not correctly filled')
    }
    
}

// 


