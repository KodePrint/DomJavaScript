import {Template} from './templates/Template.js'
import './styles/main.css'

// Template().then((value) => {
//     console.log(value)
// })
const container = null || document.querySelector('.poke-container');

const getTeam = document.querySelector('.getData').addEventListener('click', () => {
    //DrawTemplate()
    DrawTemplate();

})
const DrawTemplate = async () => {
    const spinner = document.querySelector('.spiner');
    if (container.childElementCount > 0) {
        spinner.style.display = 'block';
        let cards = document.querySelectorAll('.poke-card')
        cards.forEach(card => {
            card.remove()
        });
    }
    let object = await Template();
    container.append(...object)
    spinner.style.display = 'none';
};