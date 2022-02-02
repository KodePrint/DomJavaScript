import { container, ids } from "webpack";

const BASEURL = process.env.API;

const PokeList = []

const Num = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const randomIds = () => {
    var idsPokemon = []
    while (idsPokemon.length < 6) {
        let poke = Num(1,150)
        if (!idsPokemon.includes(poke)) {
            idsPokemon.push(poke)
        }
    }
    return idsPokemon
}

const getData = () => {
    randomIds().forEach(id => {
        fetchData(id)
    });

    return PokeList
}

const fetchData = async (id) => {
    const apiUrl = `${BASEURL}pokemon/${id}`
    try {
        const res = await fetch(apiUrl)
        const response = await res.json()

        var poke = {
            "id":response.id,
            "name": response.name,
            "sprite":response.sprites.front_default,
            "types": [],
        } 
        
        // response.types.forEach(element => {
        //     console.log(element.type.name)
        // });
        // response.id
        // response.name
        // response.sprites.front_default
        // response.types
        PokeList.push(poke)

    } catch (error) {
        console.log(error)
    };
};

export default getData;