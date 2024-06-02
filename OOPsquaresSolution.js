class App{
  constructor(){
this.section=document.querySelector(".section--js"); 
    this.box=document.querySelector(".container--js");
this.counter=0;
this.mainBox=document.querySelector(".boxOfBoxes--js");
this.clickButton=document.querySelector(".mainButton--js");
    this.clickButton.addEventListener("click",()=>{
      this.counter++;
      let clonedBox=this.box.cloneNode(true);
      this.mainBox.appendChild(clonedBox);
      clonedBox.classList.add(this.counter);
      clonedBox.classList.remove('notVisible');
      clonedBox.textContent=(`${this.counter}`);
      if(this.hasNumber(clonedBox.classList)){
        clonedBox.classList.add('circleElement');
      }
    //  if(hasNumber(this.clonedBox.classList)){
    //    this.clonedBox.classList.add('circleElement');
    //  }
    })
  }
  hasNumber(classList){

  let classString=Array.from(classList).join(" ");
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
}

const test=new App();
