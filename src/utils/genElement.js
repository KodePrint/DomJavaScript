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
import water from '../assets/images/icons/water.png'

const setImg = (type) => {
    console.log(type)
    let img
    switch (type) {
        case ('fire'):
            img = fire
            break;
        case ('bug'):
            img = bug
            break;
        case ('dark'):
            img = dark
            break;
        case ('dragon'):
            img = dragon
            break;
        case ('electric'):
            img = electric
            break;
        case ('fairy'):
            img = fairy
            break;
        case ('fighting'):
            img = fighting
            break;
        case ('flying'):
            img = flying
            break;
        case ('ghost'):
            img = ghost
            break;
        case ('grass'):
            img = grass
            break;
        case ('ground'):
            img = ground
            break;
        case ('ice'):
            img = ice
            break;
        case ('normal'):
            img = normal
            break;
        case ('poison'):
            img = poison
            break;
        case ('psychic'):
            img = psychic
            break;
        default:
            img = water
            break;
    }
    console.log(img)
    return img
}

const getTypes = (types, ul) => {
    types.forEach(element => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let span = document.createElement('span');
        
        span.textContent = element.type.name
        img.src = setImg(element.type.name)
        li.append(img, span)    
        ul.append(li)
    });
    
}
const Elements = (pk) => {
    let pcard = document.createElement('div');
    pcard.classList.add('poke-card');
    let picture = document.createElement('picture');
    picture.classList.add('poke-image-container');
    let pokeball = document.createElement('div');
    pokeball.classList.add('pokeball');
    let deatil = document.createElement('div');
    deatil.classList.add('detail');
    let img = document.createElement('img');
    img.src = pk.sprites.front_default;
    img.alt = pk.name;
    let info = document.createElement('div');
    info.classList.add('poke-info');
    let number = document.createElement('h3');
    number.classList.add('number')
    number.textContent = `No. ${pk.id}`;
    let name = document.createElement('h2');
    name.classList.add('name')
    name.textContent = pk.name;
    let list = document.createElement('ul');
    list.classList.add('types')

    getTypes(pk.types, list);

    pokeball.append(deatil);
    picture.append(pokeball, img)
    info.append(number, name, list)
    pcard.append(picture, info)

    return pcard
} 

export {Elements};