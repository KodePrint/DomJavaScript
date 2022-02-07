import {Template} from './templates/Template.js'
import './styles/main.css'

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