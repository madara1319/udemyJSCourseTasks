class SizeOnWheel {
  #i = 0
  constructor(element) {
    this.element =element;
    this.elementStyle=getComputedStyle(this.element);
    this.initialDim=1*this.elementStyle.height;

    this.init();
  }
//start method using event listener event wheel launching sizeOnWheel method
  init() {
    window.addEventListener('wheel',(event)=>{ this.#sizeOnWheel(event,this.element)})
  }
//private method changing size of element on event(wheel)
  #sizeOnWheel = (event,element) => {
    if (event.deltaY > 0) {
      this.#i += 1
    } else {
      this.#i -= 1
    }
    this.elementStyle.style.height = `${this.initialDim+(this.#i * 25)}px`
    this.elementStyle.style.width = `${this.initialDim+(this.#i * 25)}px`
    console.log(element.style.height);
  }
}
const square=document.querySelector('.container')
new SizeOnWheel(square);
