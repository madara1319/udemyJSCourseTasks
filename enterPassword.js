const input=document.getElementById('pass');
const div=document.querySelector('.message')
//keyup event similar to input
//change also looks cool

input.addEventListener('input',(e)=>{
    console.log(e.target.value);
    div.textContent=e.target.value;
})

