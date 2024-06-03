//window.alert("chuj");
let number=300;
const background=document.querySelector("body");
const square=document.querySelector(".container");
const numberRegex=/\d+/g;
const windowHeight=window.innerHeight;
console.log(windowHeight);

  let i=0;
window.addEventListener("wheel",(event)=>{
  if(event.deltaY>0){
    console.log(i+=1);
    square.style.height=`${i*25}px`;
    square.style.width=`${i*25}px`;
  }
  else{
    console.log(i-=1);
    square.style.height=`${i*25}px`;
    square.style.width=`${i*25}px`;
  }
})
