console.log("122");
localStorage.setItem("name",'sachin');

let form = document.getElementById('my-form')
form.addEventListener('submit',localstorage);

function localstorage(e){
    e.preventDefault();
    // console.log("Inside locale")
    let text = document.getElementById('name').value
    let email = document.getElementById('email').value;
    if(text.length>0 && email.includes('@') && email.length>1){
        localStorage.setItem(text,email) ;
    }else{
        alert('Fields are not correctly filled')
    }
    
}

