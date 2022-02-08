import {Elements} from "../utils/genElement";
import {fetchData} from "../utils/getData";
import {randomIds} from "../utils/randomId";

const spinner = document.querySelector('#image-spiner');

const Template = async () => {
    const ListTemplates = [];
    let pokeCard = ``;
    let ids = randomIds();

    for (let i = 0; i < ids.length; i++) {
        let poke = await fetchData(ids[i])
        ListTemplates.push(Elements(poke));
    }
    spinner.style.display = 'block';

    return ListTemplates
}


export {Template};