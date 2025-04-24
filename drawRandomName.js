import { meskie } from './namesArrays.js'
const answer = document.querySelector('.answer');
const button = document.querySelector('button');

const randomNameGenerator = () => {
    let randomName = meskie[Math.floor(Math.random() * (meskie.length - 1))];

    answer.textContent = `${randomName}`
}
button.addEventListener('click', randomNameGenerator)
