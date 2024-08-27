import axios from "axios"
export class PokemonService{
    static getPokemons = ()=>{
        const promises = axios.get('https://pokeapi.co/api/v2/pokemon?limit=500').then((response)=>response.data).then(data=>{
            const {results} = data;
            const promises = results.map( result=>{
                return axios.get(result.url)
            })
            return Promise.all(promises).then(responses=>{
                return responses.map(response=>{
                    return response.data
                })
            })
        })
        return promises
    }
    static getPokemonTypes = ()=>{
        const promise = axios
        .get("https://pokeapi.co/api/v2/type")
        .then((response) => response.data)
        return promise;
    }
}