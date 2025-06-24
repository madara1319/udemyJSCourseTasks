const codes = document.querySelector('section')
const button = document.querySelector('button')
const randomCodesGenerator = () => {
    let randomCode = Math.random()
    codes.textContent=`${randomCode}`
}
//comment
button.addEventListener('click', randomCodesGenerator)
