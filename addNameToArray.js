const button = document.querySelector('button')
const div = document.querySelector('div')
const input = document.querySelector('input')
const newSec = document.createElement('section')
const inputArray = [];

const addElementToArray = (element, array) => {
    if (array.length === 0) {
        array.push(element);
    }
    else {
        if (array.includes(element)) {
            window.alert("enter different elemet")
        }
        else {
            console.log("rozne")
            array.push(element);
        }
    }
}




const addNameToArray = () => {
    addElementToArray(input.value, inputArray)
    newSec.textContent = `${inputArray.join(', ')}`
    if(!div.contains(newSec)){
        div.append(newSec);
    }
}
//albo <button> nie w form albo preventDefault powoduje
//ze nie ma przeladowania strony za kazdym wpisaniem inputa
button.addEventListener('click', (e) => {
    addNameToArray()
    e.preventDefault()
})
