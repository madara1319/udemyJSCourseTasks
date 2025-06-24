const codes = document.querySelector('section')
const button = document.querySelector('button')
const chars='ABCDEFGHIJKLMNOQPRSTUVXZ0123456789';
const randomCodesGenerator = () => {
    let randomCode = Math.floor(Math.random()*Math.pow(10,10))
    //const length=Math.floor(Math.random() * (100-10 + 1))+10;
    codes.textContent=`${randomCode}`
}
//comment
button.addEventListener('click', randomCodesGenerator)
