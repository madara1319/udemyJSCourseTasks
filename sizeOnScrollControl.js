//window.alert("chuj");
let number=300;
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
          if((1*style.height.match(numberRegex))>=0)
          {   
            background.addEventListener("wheel",()=>
            {
              number-=5;
              square.style.height=`${number}px`;
              square.style.width=`${number}px`;
              checkScroll();
            }
            )
            //return;
        
        }
      

}

function enlargeTheSquare(){

            if((1*style.height.match(numberRegex))<=windowHeight/2)
            {
              background.addEventListener("wheel",()=>
                {
                  number+=5;
                  square.style.height=`${number}px`;
                  square.style.width=`${number}px`;
                  checkScroll();
                }
                )
               // return;
        
                //checkScroll();
            }
}


