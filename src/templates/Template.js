import {Elements} from "../utils/genElement";
import {fetchData} from "../utils/getData";
import {randomIds} from "../utils/randomId";

const Template = async () => {
    const ListTemplates = [];
    let pokeCard = ``;
    let ids = randomIds();

    for (let i = 0; i < ids.length; i++) {
        let poke = await fetchData(ids[i])
        ListTemplates.push(Elements(poke));
    }

    return ListTemplates
}
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

export {Template};