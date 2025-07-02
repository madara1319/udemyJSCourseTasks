const codes = document.querySelector('section')
const section=document.createElement('section');
const button = document.querySelector('button')
const chars='ABCDEFGHIJKLMNOQPRSTUVXZ0123456789';


function singleCodeGenerator(){
    let array=[];
    for (let i=0; i<10; i++){
        array.push(chars[Math.floor(Math.random()*chars.length)])
        codes.append(`${array.join()}`,section)
    }
    console.log(array)
    console.log(array.join())
}

function randomCodesGenerator(){
    for (let i=0; i<1000; i++){

        singleCodeGenerator();
    }
}
//comment
button.addEventListener('click', randomCodesGenerator())
