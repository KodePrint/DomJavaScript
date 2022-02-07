import {Template} from './templates/Template.js'
import './styles/main.css'


let picture = document.querySelector('.poke-image-container')
let elementWidth = window.getComputedStyle(picture)

picture.style.height = elementWidth.getPropertyValue('width')

console.log(elementWidth.getPropertyValue('width'))
picture.addEventListener('change', () => {
    picture.style.height = picture.style.width
})
// Template().then((value) => {
//     console.log(value)
// })
const container = null || document.querySelector('.poke-container');

const getTeam = document.querySelector('.getData').addEventListener('click', () => {
    DrawTemplate()
})
const DrawTemplate = async () => {
    let object = await Template()
    if (container.childElementCount > 0) {
        let cards = document.querySelectorAll('.poke-card')
        cards.forEach(card => {
            card.remove()
        });
    }
    container.append(...object)
};