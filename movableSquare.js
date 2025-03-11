console.log("Hello world!")
let isDragging = false;
let offsetX, offsetY
const div = document.querySelector('div');
div.style.position='fixed';
div.style.cursor='grab';
div.style.transition=`background-color 0.2s`
div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'magenta';
    isDragging = true
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    //    offsetX = e.offsetX;
    //    offsetY = e.offsetY;
    //    e.preventDefault()
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

})

function onMouseMove(e) {
    if (!isDragging) {
        return;
    }
    requestAnimationFrame(()=>{
      div.style.left=`${e.clientX - offsetX}px`  
      div.style.top=`${e.clientY - offsetY}px`  
    })
}

function onMouseUp(){
    isDragging=false;
    div.style.backgroundColor='#000';
    document.removeEventListener("mousemove",onMouseMove)
    document.removeEventListener("mouseup",onMouseUp)
}

//document.addEventListener('mousemove', (e) => {
//    console.log(`e.clientX = ${e.clientX}, e.clientY = ${e.clientY}`)
//    console.log(`div.getBoundingClientRect().left = ${div.getBoundingClientRect().left}, div.getBoundingClientRect().top = ${div.getBoundingClientRect().top}`)
//    if (isDragging) {
//        div.style.left = `${e.clientX - offsetX}px`;
//        div.style.top = `${e.clientY - offsetY}px`;
//        e.preventDefault();
//    }
//})
//document.addEventListener('mouseup', () => {
//    div.style.backgroundColor = '#000'
//    isDragging = false
//})
