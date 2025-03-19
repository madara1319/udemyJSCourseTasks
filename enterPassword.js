const input=document.getElementById('pass');
const div=document.querySelector('.message')
//keyup event similar to input
//change also looks cool
const password="user";
const message="testMessage"
input.addEventListener('input',(e)=>{
    if(password==e.target.value){
        div.textContent=message;
        e.target.value='';
    }
    else{
        div.textContent=''
    }
})

input.addEventListener('focus',(e)=>{
//could use toggle method for classList
   e.target.classList.add('active') 
})

input.addEventListener('blur',(e)=>{
   e.target.classList.remove('active') 
})
