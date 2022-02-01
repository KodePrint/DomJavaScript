import { container, ids } from "webpack";

const BASEURL = process.env.API;

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
    let pokeList = []
    randomIds().forEach(id => {
        fetchData(id).then((value) => {
            fetchData(id).then((value) => {
                pokeList.push(value)  
            })
        })
        // pokeList.push(poke)
    });

    return pokeList
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

        return poke

    } catch (error) {
        console.log(error)
    };
};

export default getData;