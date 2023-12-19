//window.alert("chuj");
let number=25;
const background=document.querySelector("body");
const square=document.querySelector(".container");
const numberRegex=/\d+/g;
const windowHeight=window.innerHeight;
console.log(windowHeight);
background.addEventListener("wheel",()=>
  {

    let style=getComputedStyle(square);
    let dim=1*style.height.match(numberRegex);
    console.log(dim);

    for (let i=0; dim<=windowHeight/2; i++)
    {

       number+=5;
        square.style.height=`${number}px`;
      square.style.width=`${number}px`;
    }
  if(dim>(windowHeight/2))
  {
    number-=5;
  square.style.height=`${number}px`;
  square.style.width=`${number}px`;
  }
  else if(dim>=0)
  {

  }
});
