import { useEffect, useState } from "react"
import axios from "axios"
export const usePokemons = ()=>{
    const [pokemons, setPokemons] = useState(null)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response)=>response.data).then(data=>{
            const {results} = data;
            console.log(results)
            const promises = results.map(async result=>{
                return await axios.get(result.url)
            })
            Promise.all(promises).then(responses=>{
                return responses.map(response=>{
                    return response.data
                })
            }).then(gettedPokemons=>setPokemons(gettedPokemons))
        })
    }, [])
    return {pokemons}
}