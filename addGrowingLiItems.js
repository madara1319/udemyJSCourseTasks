let size = 10;
let orderElement = 1;
const init = ()=> {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const button = document.createElement('button');
    let listUL = document.createElement('ul');
 //   for (let i=0; i<=size; i++)
 //   {
 //       let listLI = document.createElement('li');
 //       listLI.textContent=`element ${i}`;
 //       console.log(listLI.textContent);
 //       listUL.append(listLI);
 //   }
    button.textContent="Click Here!";
    div.append(button);
    div.append(listUL);
    body.append(div);
    
    let i=0;
    button.addEventListener("click",()=>{

        createLiElements(listUL);
    let listElements = document.querySelectorAll('li');  
//        listElements.forEach((element)=>{
  //          element.style.display='flex';
    //        i+=1;
      //      element.style.fontSize=`${i}px`;
       // });
    })
  //  console.log(listElements.length);
}

const createLiElements = (inputList)=>{
    let i = 0;
    let listElement = document.querySelectorAll('li');
//    console.log(listElement);
//    if (listElement.length<=0)
//    {
//        console.log('false');
//    }
//    else{
//        console.log(listElement[listElement.length-1].style.fontSize)
//    }
    for(let i=0; i<=size; i++){
        let listLI=document.createElement('li');
        if (listElement.length<=0)
        {

        listLI.style.fontSize='10px';
        }
        else {

        listLI.style.fontSize=listElement[listElement.length-1].style.fontSize+1;
        }
        listLI.textContent=`element ${listElement.length+i}`

        //const lastLiElementSize = listElement.length.fontSize;
       // console.log(listLI.style.fontSize + "test");
        inputList.append(listLI);
    }

}

init()


