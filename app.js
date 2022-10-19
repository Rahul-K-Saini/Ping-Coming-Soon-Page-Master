const button = document.querySelector('button');
const emailInput = document.getElementById('email');
const error = document.getElementById('err_msg');
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener('click',(event)=>{
    if (emailInput.value=="" || emailInput==null){
        alert('Enter Email Address')
        return false;
    } 
    else if(emailInput.value.match(pattern)){
        alert(`hello ${emailInput.value}`)
        
    }

    else{
        error.classList.remove('hide');
        emailInput.style.border = "1px solid red";
        event.preventDefault();
    
    }

})