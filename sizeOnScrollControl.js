//window.alert("chuj");
let number=300;
const background=document.querySelector("body");
const square=document.querySelector(".container");
const numberRegex=/\d+/g;
const windowHeight=window.innerHeight;
console.log(windowHeight);

function checkScroll(){

let style=getComputedStyle(square);
const currentHeight=1*style.height.match(numberRegex);
    if ((currentHeight)>=windowHeight/2)
    {
      lowerTheSquare();
    }
    else if((currentHeight)<=windowHeight/2||(currentHeight)===0){
      enlargeTheSquare();
    }
}
checkScroll();

function lowerTheSquare(){

            background.addEventListener("wheel",()=>
            {
              number-=5;
              square.style.height=`${number}px`;
              square.style.width=`${number}px`;
              console.log(number);
          if((number)<=0)
              {
                background.removeEventListener("wheel",lowerTheSquare);
                checkScroll();
              }
            });
        }

function enlargeTheSquare(){

  background.addEventListener("wheel",()=>
    {
      number+=5;
      square.style.height=`${number}px`;
      square.style.width=`${number}px`;
      if((number)>=windowHeight/2)
      {
        background.removeEventListener("wheel",enlargeTheSquare);
        checkScroll();
      }
      });
}


