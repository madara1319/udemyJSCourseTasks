console.log("Hello world!")
let isDragging=false;
let offsetX, offsetY
const div=document.querySelector('div');
div.addEventListener('mousedown',(e)=>{
    div.style.backgroundColor='magenta';
    isDragging=true
    offsetX=e.clientX - div.getBoundingClientRect().left;
    offsetY=e.clientY - div.getBoundingClientRect().top;
    e.preventDefault()
})
document.addEventListener('mousemove',(e)=>{
    if(isDragging){
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top=`${e.clientY - offsetY}px`;
        e.preventDefault();
    }
})
document.addEventListener('mouseup',()=>{
    div.style.backgroundColor='#000'
isDragging=false})
