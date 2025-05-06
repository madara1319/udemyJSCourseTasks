import { meskie } from './namesArrays.js'
const answer = document.querySelector('.answer');
const button = document.querySelector('button');
const prefixPhrases = ["Mysle ", "Mam wrazenie ", "Uważam ", "Jestem pewien ", "Szczerze powiedziawszy "]
const randomNameGenerator = () => {
    let randomName = meskie[Math.floor(Math.random() * (meskie.length - 1))];
    let randomPrefix = prefixPhrases[Math.floor(Math.random() * (prefixPhrases.length - 1))];
    answer.textContent = `${randomPrefix}że najlepsze będzie imię ${randomName}`
}
button.addEventListener('click', randomNameGenerator)
