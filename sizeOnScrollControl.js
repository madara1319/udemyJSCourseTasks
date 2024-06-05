class SizeOnWheel {
  #i = 0;
  //direction for increasing decreasing variant in sizingToggle
  #direction=1;
  constructor(element,scrollVariant) {
    this.element =element;
    this.scrollVariant=scrollVariant;
    this.initialDim=parseFloat(getComputedStyle(this.element).height);
    this.removeEventListeners();
    if (this.scrollVariant===1){
      this.initSizingToggle();
    }
    else{
      this.initSizeUpOrDown();
    }
  }
//start method using event listener event wheel launching sizeOnWheel method
  initSizeUpOrDown() {
    window.addEventListener('wheel',(event)=>{ this.#sizeUpOrDown(event,this.element)})
  }

  initSizingToggle() {
    window.addEventListener('wheel',(event)=>{ this.#sizingToggle(event,this.element)})
  }

  removeEventListeners(){
    if (SizeOnWheel.currentInstance){
      window.removeEventListener("wheel",SizeOnWheel.currentInstance.boundHandler);
    }
  }

//private method changing size of element on event(wheel)
  #sizeUpOrDown = (event,element) => {
    if (event.deltaY > 0) {
      this.#i += 1
    } else {
      this.#i -= 1
    }
    this.element.style.height = `${this.initialDim+(this.#i * 25)}px`
    this.element.style.width = `${this.initialDim+(this.#i * 25)}px`
    console.log(element.style.height);
  }
  #sizingToggle=(event,element)=>{
    //zwieksza caly czas az jak jest wieksze niz wartosc potem zmneijszy o jeden i znow jest mniejszy i zwiekszy ale tylko o ten jeden
    if ( this.#direction===1 && parseFloat(this.element.style.height)>=(0.5*window.innerHeight) ) {
      this.#direction=- 1
    } else if(this.#direction===-1 && (parseFloat(this.element.style.height)<=0) ) {
      this.#direction = 1
    }
    this.#i+=this.#direction;
    this.element.style.height = `${this.initialDim+(this.#i * 10)}px`
    this.element.style.width = `${this.initialDim+(this.#i * 10)}px`

  } 
}
const square=document.querySelector('.container')
let scrollVariant=1;
const changeButton=document.querySelector('.changeScroll'); 
changeButton.addEventListener('click',(event)=>{
  if(scrollVariant===1){
    scrollVariant=0;
  console.log(scrollVariant);

 new SizeOnWheel(square,scrollVariant);
  }
  else{

    scrollVariant=1;
  console.log(scrollVariant);
 new SizeOnWheel(square,scrollVariant);
  }
})
