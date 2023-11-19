let section=document.querySelector(".section--js");
let box=document.querySelector(".container--js");
let clickButton=document.querySelector(".mainButton--js");
clickButton.addEventListener("click",()=>{section.innerHTML+=box;});;
console.log(box);
