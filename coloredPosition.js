console.log("Hello world!");

const div = document.querySelector('.div');
const body=document.querySelector('body');
body.style.display='flex';
body.style.height='100%';
body.style.justifyItems='center';
body.style.flexDirection='column';
body.style.alignItems='center';
body.style.backgroundColor='hsl(212, 45%, 89%)';

div.style.display='flex';
div.style.justifyContent='center';
div.style.alignItems='center';
div.style.width='320px';
div.style.height='320px';
div.style.paddingTop='17px';
div.style.marginTop='34px';
div.style.backgroundColor='hsl(0, 0%, 100%)';

window.addEventListener("mousemove",(e)=>{
    div.textContent=`${e.clientX}, ${e.clientY}`;
    body.style.backgroundColor=`rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX/e.clientY})`;
})
