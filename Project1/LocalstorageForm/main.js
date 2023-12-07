console.log("Inside Main_JS");
// localStorage.setItem("name",'sachin');

let form = document.getElementById('my-form')
form.addEventListener('submit',localstorage);


// console.log(localStorage.length);

// ===-=-=-=-=-=-= This data will append in dom as well as goes in local storage -=-=-=-=//



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
        let btn = document.createElement('button');
            btn.textContent = 'Delete'
        let li = document.createElement('li');
        li.classList = "item"
        li.textContent = email;
        btn.style.marginLeft='20px';
        btn.classList = "delete";
       
        li.appendChild(btn);

        items.appendChild(li);

        btn.addEventListener('click',deletefromlocalanddom);
        
    //    console.log(li);
    }else{
        alert('Fields are not correctly filled')
    }
    
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //
   
function deletefromlocalanddom(e){
    e.preventDefault();
    let items = document.querySelector('#items12');
    // console.log(e.target.parentElement)
       let todel = e.target.parentElement
//    console.log(items.removeChild(todel));
       items.removeChild(todel)
    //    console.log(todel.firstChild.textContent);
     localStorage.removeItem(todel.firstChild.textContent)
}
