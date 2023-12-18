//window.alert("chuj");
let number=25;
const square=document.querySelector(".container");
square.addEventListener("click",()=>{
  number+=5;
  square.style.height=`${number}px`;
  square.style.width=`${number}px`;
  console.log("test klika");
});
