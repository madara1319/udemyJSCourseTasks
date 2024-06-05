class SizeOnWheel {
  #i = 0
  //direction for increasing decreasing variant in sizingToggle
  static currentInstance = null
  #direction = 1
  constructor(element, scrollVariant) {
    this.element = element
    this.scrollVariant = scrollVariant
    this.initialDim = parseFloat(getComputedStyle(this.element).height)
    this.removeEventListeners()

    if (this.scrollVariant === 1) {
      this.initSizingToggle()
    } else {
      this.initSizeUpOrDown()
    }
    //variable holding instance of this object
    SizeOnWheel.currentInstance = this
  }
  //start method using event listener event wheel launching sizeOnWheel method
  initSizeUpOrDown() {
    console.log('sizeUpOrDown')
    this.boundHandler = (event) => this.#sizeUpOrDown(event, this.element)
    window.addEventListener('wheel', this.boundHandler)
  }

  initSizingToggle() {
    console.log('Toggle')
    this.boundHandler = (event) => this.#sizingToggle(event, this.element)
    window.addEventListener('wheel', this.boundHandler)
  }

  removeEventListeners() {
    if (SizeOnWheel.currentInstance) {
      window.removeEventListener(
        'wheel',
        SizeOnWheel.currentInstance.boundHandler,
      )
    }
  }

  //private method changing size of element on event(wheel)
  #sizeUpOrDown = (event, element) => {
    if (event.deltaY > 0) {
      this.#i += 1
    } else {
      this.#i -= 1
    }
    this.element.style.height = `${Math.max(this.initialDim + this.#i * 25, 0)}px`
    this.element.style.width = `${Math.max(this.initialDim + this.#i * 25, 0)}px`
    console.log(element.style.height)
  }
  #sizingToggle = (event, element) => {
    //zwieksza caly czas az jak jest wieksze niz wartosc potem zmneijszy o jeden i znow jest mniejszy i zwiekszy ale tylko o ten jeden
    if (
      this.#direction === 1 &&
      parseFloat(this.element.style.height) >= 0.5 * window.innerHeight
    ) {
      this.#direction = -1
    } else if (
      this.#direction === -1 &&
      parseFloat(this.element.style.height) <= 0
    ) {
      this.#direction = 1
    }
    this.#i += this.#direction
    this.element.style.height = `${Math.max(this.initialDim + this.#i * 10, 0)}px`
    this.element.style.width = `${Math.max(this.initialDim + this.#i * 10, 0)}px`
  }
}

const square = document.querySelector('.container')
let scrollVariant = 1
let test
const changeButton = document.querySelector('.changeScroll')
changeButton.addEventListener('click', (event) => {
  square.classList.remove('notVisible')
  changeButton.classList.remove('BigButton')
  changeButton.classList.add('smallButton')
  scrollVariant = 1 - scrollVariant
  console.log(scrollVariant)
  if (scrollVariant === 1) {
    changeButton.innerHTML = 'Change to UpOrDown'
  } else {
    changeButton.innerHTML = 'Change to Toggle'
  }
  new SizeOnWheel(square, scrollVariant)
})
