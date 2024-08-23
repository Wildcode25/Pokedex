import { useEffect, useState } from "react"

export const usePokemons = ()=>{
    const [initialPokemons, setInitialPokemons] = useState(null)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(response=>response.data).then(data=>{
            console.log(data.results)
            setInitialPokemons(data.results)
        })},[])
    return {initialPokemons}
}