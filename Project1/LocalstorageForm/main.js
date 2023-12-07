console.log("Inside Main_JS");
// localStorage.setItem("name",'sachin');

let form = document.getElementById('my-form')
form.addEventListener('submit',localstorage);

localStorage.setItem("myobj",new Array())
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
        localStorage.setItem("myobj",string) ;
    }else{
        alert('Fields are not correctly filled')
    }
    
}

// 


