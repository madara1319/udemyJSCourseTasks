let advicesArray = ["Przemysl to jeszcze", "Dawaj walcz!"]
const input = document.querySelector("input")
const addButton = document.querySelector(".add")
const cleanButton = document.querySelector(".clean")
const showAdviceButton = document.querySelector(".showAdvice")
const showOptionsButton = document.querySelector(".showOptions")
const advice = document.querySelector("h1")

const showAdvices = () => {
    advice.textContent=`${advicesArray[Math.floor(Math.random()*advicesArray.length)]}`
}
const showOptions = () => {
    const message = `dostepne opcje to ${advicesArray}`
    window.alert(message)
}
const addAdvice = (element, array) => {
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
const cleanAdvices = () => {
    advicesArray.length = 0;
}


showAdviceButton.addEventListener('click', (e) => {
    e.preventDefault()
    showAdvices();
})
showOptionsButton.addEventListener('click', (e) => {
    e.preventDefault()
    showOptions();
})
addButton.addEventListener('click', (e) => {
    e.preventDefault()
    addAdvice(input.value, advicesArray);
})
cleanButton.addEventListener('click', (e) => {
    e.preventDefault()
    cleanAdvices();
})
