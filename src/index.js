import Template from './templates/Template.js'
import './styles/main.css'

// Template().then((value) => {
//     console.log(value)
// })

(async function App() {
    const container = null || document.querySelector('.poke-container');
    Template();
    // container.innerHTML = await Template();
})();