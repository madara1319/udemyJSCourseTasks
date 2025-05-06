const codes = document.querySelector('section')
const button = document.querySelector('button')
const randomCodesGenerator = () => {
    let randomCode = Math.random()
    codes.textContent=`${randomCode}`
}

button.addEventListener('click', randomCodesGenerator)
