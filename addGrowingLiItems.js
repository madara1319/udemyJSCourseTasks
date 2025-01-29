let size = 10;
let orderElement = 1;
const init = ()=> {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const button = document.createElement('button');
    let listUL = document.createElement('ul');
    for (let i=0; i<=size; i++)
    {
        let listLI = document.createElement('li');
        listLI.textContent=`element ${i}`;
        console.log(listLI.textContent);
        listUL.append(listLI);
    }
    button.textContent="Click Here!";
    div.append(button);
    div.append(listUL);
    body.append(div);
    
    let i=0;
    button.addEventListener("click",()=>{

        createLiElements(listUL);
    let listElements = document.querySelectorAll('li');  
        listElements.forEach((element)=>{
            element.style.display='flex';
            i+=1;
            element.style.fontSize=`${i}px`;
        });
    })
  //  console.log(listElements.length);
}

const createLiElements = (inputList)=>{
    let i = 0;
    const listElement = document.querySelectorAll('li');

    for(let i=0; i<=size; i++){
        let listLI=document.createElement('li');
        listLI.textContent=`element ${listElement.length+i}`
        inputList.append(listLI);
    }

}

init()


