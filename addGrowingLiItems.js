let size = 10;
let orderElement = 1;

//starting main function
const init = ()=> {
    //create HTML elements 
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const button = document.createElement('button');
    let listUL = document.createElement('ul');
    button.textContent="Click Here!";
    div.append(button);
    div.append(listUL);
    body.append(div);
   

    //add callback function to event listener
    button.addEventListener("click",()=>{
        createLiElements(listUL);
    })
}

const createLiElements = (inputList)=>{
    let i = 0;
    let listElement = document.querySelectorAll('li');
    for(let i=0; i<=size; i++){
        let listLI=document.createElement('li');

        //for the first loop run when no list Elements created
        if (listElement.length<=0)
        {
            listLI.style.fontSize=`${size + i}px`;
        }

        //size up elements depending on the size of the last element on the list
        else {
            listLI.style.fontSize=`${i+parseFloat(listElement[listElement.length-1].style.fontSize)}px`;
        }
        listLI.textContent=`element ${listElement.length+i}`
        inputList.append(listLI);
    }
}

init()


