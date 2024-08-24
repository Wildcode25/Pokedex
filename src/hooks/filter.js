import { useContext } from "react"
import { FilterContext } from "../context/filter"

export const useFilter = ()=>{
    const {filters, setFilters} = useContext(FilterContext)
    const filterPokemons = (pokemons)=>{
        if(!pokemons) return null
        return pokemons.filter((pokemon)=>{

            const types = pokemon.types.map((typeObj)=>{
                return typeObj.type.name
            })
            if(filters.name) return pokemon.name === filters.name;
            return filters.types.length === 0 || filters.types.every(type=>types.includes(type))
             
        })
    }
    return {filters, setFilters, filterPokemons}
}
