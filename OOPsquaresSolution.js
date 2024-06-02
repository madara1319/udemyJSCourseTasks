class App {
  constructor() {
    this.section = document.querySelector('.section--js')
    this.box = document.querySelector('.container--js')
    this.counter = 0
    this.mainBox = document.querySelector('.boxOfBoxes--js')
    this.clickButton = document.querySelector('.mainButton--js')
    this.clickButton.addEventListener('click', () => {
      this.counter++
      let clonedBox = this.box.cloneNode(true)
      this.mainBox.appendChild(clonedBox)
      clonedBox.classList.add(this.counter)
      clonedBox.classList.remove('notVisible')
      clonedBox.textContent = `${this.counter}`
      if (this.hasNumber(clonedBox.classList)) {
        clonedBox.classList.add('circleElement')
      }
      //  if(hasNumber(this.clonedBox.classList)){
      //    this.clonedBox.classList.add('circleElement');
      //  }
    })
  }
  hasNumber(classList) {
    let classString = Array.from(classList).join(' ')
    let numberInString = Number(classString.match(/\d+/))
    if (numberInString % 5 == 0) {
      console.log(`to jest ${typeof numberInString} ${numberInString % 5}`)
      return true
    } else {
      console.log(`To jest ${typeof numberInString} ${numberInString % 5}`)
      return false
    }
  }
}


class NumberAdd {
  constructor(selector, startNumber, step) {
    this.courseSolution = document.querySelector('.courseSection--js');
    this.btn = document.querySelector(selector);
    this.number = startNumber;
    this.activeNumber = 1;
    this.step = step;
    this.btn.addEventListener('click', this.addElement.bind(this));
  }
  addElement() {
    const div = document.createElement('div')
    div.textContent = this.number;
    this.number += this.step;
    div.classList.add('courseDivElement')
    div.textContent = this.number //efekt -> <div>1</div>
    if (this.activeNumber == 5) {
      this.activeNumber = 0
      div.classList.add('circle')
    }
    this.courseSolution.appendChild(div);
    this.activeNumber++;
  }
}


const test = new App()
const test2 = new NumberAdd('.courseMainButton--js', 0, 1)
