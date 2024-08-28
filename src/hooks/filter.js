import { useCallback, useContext } from "react"
import { FilterContext } from "../context/filter"
import { PokemonService } from "../service/pokemonService.js"
import { baseUrl } from "../utils/const.js"
export const useFilter = ()=>{
    const {filters} = useContext(FilterContext)
    const filterPokemons = useCallback(async ()=>{
        let pokemons = []   
        if(filters.current.name==='' && filters.current.types.length===0){
          const {results} = await PokemonService.getPokemons(baseUrl)
          pokemons=results
        } 
        else pokemons = await PokemonService.getAllPokemons()
        const filteredPokemons = pokemons.filter((pokemon)=>{
            const types = pokemon.types.map((typeObj)=>{
                return typeObj.type.name
            })
            if(filters.current.name) return pokemon.name.includes(filters.current.name);
            return filters.current.types.every(type=>types.includes(type))
             
        })
        return filteredPokemons
    },[])
    return {filters, filterPokemons}
}
