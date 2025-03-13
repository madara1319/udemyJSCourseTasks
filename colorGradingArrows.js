const body=document.querySelector('body');
body.style.height='100%';
body.style.display='flex'
body.style.justifyItems='center';
body.style.flexDirection='column';
body.style.alignItems='center';
let i = 0
const MAX_STEPS=100;
window.addEventListener('keydown', (e) => {
    const colorValue = Math.round(255 * (1 - i / MAX_STEPS));
    if (e.key === 'ArrowUp') {
        ++i
        console.log(`test numer: ${i}`);
        body.style.backgroundColor=`rgb(${colorValue},${colorValue},${colorValue})`
    }
    if (e.key === 'ArrowDown') {
        i--;
        console.log(`test numer: ${i}`);
        body.style.backgroundColor=`rgb(${colorValue},${colorValue},${colorValue})`
    }
})
