const input = document.getElementById('pass');
const div = document.querySelector('.message')
//keyup event similar to input
//change also looks cool
const password = "user";
const message = "testMessage"
//arrow func doesnt create this
const messages = [message, "Wiosna to piękna pora roku", "witaj świecie!", "lorem Ipsum", "bardzo tajna wiadomość to: kopytko"]
const passwords = [password, "wiosna", "mateusz", "JaJeCzKo", "hfu28xn/*kjnAFUU8g&5cgh"];

const lowerCasePassword = passwords.map(element => element.toLowerCase());

console.log(lowerCasePassword)

console.log(lowerCasePassword.map(el=>el.toUpperCase()))

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value.toLowerCase();
    passwords.forEach((element, index) => {
        if (element.toLowerCase() === text) {
            //div.textContent = messages[Math.floor(Math.random() * (messages.length - 1))];
            div.textContent = messages[index]
            e.target.value = '';
        }
    })
})


input.addEventListener('focus', (e) => {
    //could use toggle method for classList
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})
