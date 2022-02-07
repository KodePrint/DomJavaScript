const Num = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const randomIds = () => {
    var idsPokemon = []
    while (idsPokemon.length < 6) {
        let poke = Num(1,898)
        if (!idsPokemon.includes(poke)) {
            idsPokemon.push(poke)
        }
    }
    return idsPokemon
}

export {randomIds};