let section=document.querySelector(".section--js");
let box=document.querySelector(".container--js");
let counter=0;
let clickButton=document.querySelector(".mainButton--js");
clickButton.addEventListener("click",()=>{
  counter++;
  let clonedBox=box.cloneNode(true);
  section.appendChild(clonedBox);
  console.log(counter);
});
console.log(box);
