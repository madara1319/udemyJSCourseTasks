//jesli wartosc dla x (event.clientX) i (event.clientY) jest parzysta
//(np. 100,122) to kolor czerwony jak nieparzysta to niebieski
//jak jeden taki jeden taki to zielony
const div = document.querySelector('div');
const body=document.querySelector('body');
div.style.height='100vh';
div.style.alignContent='center';
body.style.display='flex';
//body.style.height='100%';
body.style.justifyItems='center';
body.style.flexDirection='column';
body.style.alignItems='center';
//body.style.backgroundColor='hsl(212, 45%, 89%)';

body.addEventListener("click",(e)=>{
    const xAxisPos=e.clientX;
    const yAxisPos=e.clientY;
    const width=window.innerWidth;
    const height=window.innerHeight;
    div.innerHTML=`x = ${xAxisPos}, y = ${yAxisPos} <br> `;
    div.innerHTML+=` x = ${parseInt(100*xAxisPos/width)}, y = ${parseInt(100*yAxisPos/height)}`;
    if(!(xAxisPos%2) && !(yAxisPos%2)){

    body.style.backgroundColor=`red`;
    }
    else if(xAxisPos%2 && yAxisPos%2)
    {

    body.style.backgroundColor=`blue`;
    }
    else{

    body.style.backgroundColor=`green`;
    }

})
