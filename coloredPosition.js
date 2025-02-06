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
    const xAxisPos=e.clientX;
    const yAxisPos=e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;




    div.textContent=`${xAxisPos}, ${yAxisPos}`;

    div.style.backgroundColor=`rgb(${100*xAxisPos/width}, ${100*yAxisPos/height}, ${((100*xAxisPos/width)+(100*yAxisPos/height))/2})`;
    body.style.backgroundColor=`rgb(${100*xAxisPos/width}, ${100*yAxisPos/height}, ${((100*xAxisPos/width)+(100*yAxisPos/height))/2})`;
})
