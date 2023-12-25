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
    if ((currentHeight)>windowHeight/2)
    {
      lowerTheSquare();
    }
    else if((currentHeight)<windowHeight/2||(currentHeight)===0){
      enlargeTheSquare();
    }
}
checkScroll();

function lowerTheSquare(){

            background.addEventListener("scroll",()=>
            {
              number--;
              square.style.height=`${number}px`;
              square.style.width=`${number}px`;
              console.log("zmniejszanie " + number);
          if((number)<=0)
              {
                background.removeEventListener("scroll",lowerTheSquare);
                checkScroll();
              }
            });
        }

function enlargeTheSquare(){

  background.addEventListener("scroll",()=>
    {
      number++;
      square.style.height=`${number}px`;
      square.style.width=`${number}px`;

      console.log("powiekszanie " + number);
      if((number)>=windowHeight/2)
      {
        background.removeEventListener("scroll",enlargeTheSquare);
        checkScroll();
      }
      });
}


