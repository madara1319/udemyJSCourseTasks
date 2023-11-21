let section=document.querySelector(".section--js");
let box=document.querySelector(".container--js");
let counter=0;
let mainBox=document.querySelector(".boxOfBoxes--js");
let clickButton=document.querySelector(".mainButton--js");
function hasNumber(classList)
{
  let classString=Array.from(classList).join(" ");
  console.log(typeof(classList));
  console.log(String(classList));
  let numberInString =Number(classString.match(/\d+/));
  if(numberInString%5==0)
  {
    console.log(`to jest ${ typeof(numberInString) } ${numberInString%5}`);
    return true;
  }
  else
  {
    console.log(`To jest ${ typeof(numberInString)} ${ numberInString%5}`);
    return false;
}
}
clickButton.addEventListener("click",()=>{
  counter++;
  //console.log(counter);
  let clonedBox=box.cloneNode(true);
  mainBox.appendChild(clonedBox);
  clonedBox.classList.add(counter);
  clonedBox.classList.remove('notVisible');
  clonedBox.textContent=(`${counter}`);

  if(hasNumber(clonedBox.classList))
    clonedBox.classList.add('circleElement');
//console.log(`To jest chuuj ${hasNumber(clonedBox.classList)}`)
});


//function squareToCircle(){
//  if ()
//
//}
