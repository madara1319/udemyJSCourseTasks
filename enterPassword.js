const input = document.getElementById('pass');
const div = document.querySelector('.message')
//keyup event similar to input
//change also looks cool
const password = "user";
const message = "testMessage"
//arrow func doesnt create this
const messages = [message, "Wiosna to piękna pora roku", "chce się zajebać"]
const passwords = [password, "wiosna", "mateusz"];

input.addEventListener('input', (e) => {
    div.textContent='';
    const text = e.target.value;
    passwords.forEach((element,index) => {
        if (element === text) {
            //div.textContent = messages[Math.floor(Math.random() * (messages.length - 1))];
            div.textContent=messages[index]
            e.target.value = '';
        }
  //      else {
  //          div.textContent = '';

  //      }
    })
})


input.addEventListener('focus', (e) => {
    //could use toggle method for classList
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})
//input.addEventListener('input',(e)=>{
//    if(password==e.target.value){
//        div.textContent=message;
//        console.log(e.target.value)
//        e.target.value='';
//    }
//    else{
//        div.textContent=''
//        console.log(div.textContent)
//    }
//})
