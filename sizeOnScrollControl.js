class SizeOnWheel {
  #i = 0;
  //direction for increasing decreasing variant in sizingToggle
  #direction=1;
  constructor(element) {
    this.element =element;
    this.initialDim=parseFloat(getComputedStyle(this.element).height);
    console.log(this.initialDim);
    this.initSizingToggle();
  }
//start method using event listener event wheel launching sizeOnWheel method
  initSizeUpOrDown() {
    window.addEventListener('wheel',(event)=>{ this.#sizeUpOrDown(event,this.element)})
  }

  initSizingToggle() {
    window.addEventListener('wheel',(event)=>{ this.#sizingToggle(event,this.element)})
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
new SizeOnWheel(square);
