let section=document.querySelector(".section--js");
let box=document.querySelector(".container--js");
let counter=0;
let clickButton=document.querySelector(".mainButton--js");
clickButton.addEventListener("click",()=>{
  counter++;
  section.innerHTML+=`kutas ${counter} ${box.innerHTML}`;
  console.log(counter++);
},(false));
console.log(box);
