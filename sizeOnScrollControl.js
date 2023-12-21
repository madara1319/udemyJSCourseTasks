//window.alert("chuj");
let number=25;
const background=document.querySelector("body");
const square=document.querySelector(".container");
const numberRegex=/\d+/g;
const windowHeight=window.innerHeight;
console.log(windowHeight);
let style=getComputedStyle(square);
let dim=1*style.height.match(numberRegex);

function checkScroll(){

    if ((1*style.height.match(numberRegex))>=windowHeight/2)
    {
      lowerTheSquare();
    }
    else if((1*style.height.match(numberRegex))<=windowHeight){
      enlargeTheSquare();
    }
}
checkScroll();

function lowerTheSquare(){
    

        background.addEventListener("wheel",()=>
        {
          if((1*style.height.match(numberRegex))>=0)
          {   
            number--;
            square.style.height=`${number}px`;
            square.style.width=`${number}px`;
          }
        }
          return;
      )

    checkScroll();
}

function enlargeTheSquare(){
        background.addEventListener("wheel",()=>
          {
            if((1*style.height.match(numberRegex))<=windowHeight/2)
            {
              number++;
              square.style.height=`${number}px`;
              square.style.width=`${number}px`;
            }
        }
          return;
      )
    checkScroll();
}


