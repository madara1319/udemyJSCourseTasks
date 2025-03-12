console.log("Hello world!")
let isDragging = false;
let offsetX, offsetY
const div = document.querySelector('div');
div.style.position = 'fixed';
div.style.cursor = 'grab';
div.style.transition = `background-color 0.2s`
div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'magenta';
    div.style.cursor = 'grabbing';
    isDragging = true

    // Oblicz przesunięcie względem lewego górnego rogu div
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    // Zapobiega zaznaczaniu tekstu podczas przeciągania
    e.preventDefault();

})

function onMouseMove(e) {
    if (!isDragging) {
        return;
    }
    // Użyj requestAnimationFrame dla płynniejszej animacji
    requestAnimationFrame(() => {
        div.style.left = `${e.clientX - offsetX}px`
        div.style.top = `${e.clientY - offsetY}px`
    })
    // Zapobiega domyślnym zachowaniom przeglądarki
    e.preventDefault();
}

function onMouseUp() {
    isDragging = false;
    div.style.cursor = 'grab';
    div.style.backgroundColor = '#000';

    // Usuń nasłuchiwanie zdarzeń, aby uniknąć wycieków pamięci
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
}

