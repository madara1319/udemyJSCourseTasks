const button = document.querySelector('button')
const div = document.querySelector('div')
const input = document.querySelector('input')

const addNameToArray = () => {
    const newSec = document.createElement('section')
    newSec.textContent = `${input.value}`

    div.append(newSec);
}
//albo <button> nie w form albo preventDefault powoduje
//ze nie ma przeladowania strony za kazdym wpisaniem inputa
button.addEventListener('click', (e) => {
    addNameToArray()
    e.preventDefault()
})
