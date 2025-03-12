const body=document.querySelector('body');
body.style.height='100%';
body.style.display='flex'
body.style.justifyItems='center';
body.style.flexDirection='column';
body.style.alignItems='center';
let i = 0
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        ++i
        console.log(`test numer: ${i}`);
        body.style.backgroundColor=`#${i*i}`
    }
    if (e.key === 'ArrowDown') {
        i--;
        console.log(`test numer: ${i}`);
        body.style.backgroundColor=`#${i*i}`
    }
})
