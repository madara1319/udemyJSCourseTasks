//window.alert("chuj");
let number=25;
const background=document.querySelector("body");
const square=document.querySelector(".container");
const numberRegex=/\d+/g;
const windowHeight=window.innerHeight;
console.log(windowHeight);
background.addEventListener("wheel",()=>
  {
   console.log("test"); 

    let style=getComputedStyle(square);
    let dim=1*style.height.match(numberRegex);

    console.log(dim);

    while((1*style.height.match(numberRegex))>=0)
{
  if(dim>(windowHeight/2))
 
    {
      number-=5;
      square.style.height=`${number}px`;
      square.style.width=`${number}px`;
      console.log(dim);
    }
  }


    while((1*style.height.match(numberRegex))<windowHeight/2)
{
  if((1*style.height.match(numberRegex))<(windowHeight/2))
  
    {
      number+=5;
      square.style.height=`${number}px`;
      square.style.width=`${number}px`;
      console.log(dim);
    }
  }
});
