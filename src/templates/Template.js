import getData from "../utils/getData";
import fire from '../assets/images/icons/fire.png'
import bug from '../assets/images/icons/bug.png'
import dark from '../assets/images/icons/dark.png'
import dragon from '../assets/images/icons/dragon.png'
import electric from '../assets/images/icons/electric.png'
import fairy from '../assets/images/icons/fairy.png'
import fighting from '../assets/images/icons/fighting.png'
import flying from '../assets/images/icons/flying.png'
import ghost from '../assets/images/icons/ghost.png'
import grass from '../assets/images/icons/grass.png'
import ground from '../assets/images/icons/ground.png'
import ice from '../assets/images/icons/ice.png'
import normal from '../assets/images/icons/normal.png'
import poison from '../assets/images/icons/poison.png'
import psychic from '../assets/images/icons/psychic.png'

const Template = async () => {
    const data = await getData();
    const pokeListTemplate = []
    console.log(data)
    console.log(typeof(data))
    // data.forEach(pokemon => {
    //     let card = `
    //     <div class="poke-card">
    //         <picture class="poke-image-container">
    //             <div class="pokeball">
    //                 <div class="detail"></div>
    //             </div>
    //             <img src="" alt="">
    //         </picture>
    //         <div class="poke-info">
    //             <h3 class="number">No. 5</h3>
    //             <h2 class="name">Charmander</h2>
    //             <ul>
    //                 <li>
    //                     <img src="../dist/assets/images/icons/fire.png" alt="">
    //                     <span>Fuego</span>
    //                 </li>
    //                 <li>
    //                     <img src="../dist/assets/images/icons/fire.png" alt="">
    //                     <span>Fuego</span>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    //     `
        
    // });
    return pokeListTemplate
}

export default Template;