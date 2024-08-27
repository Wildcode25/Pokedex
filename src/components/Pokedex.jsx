import { useFilter } from "../hooks/filter.js"
import { usePokemons } from "../hooks/pokemons.js"
import { Filter } from "./Filter.jsx"
import { Pokemons } from "./Pokemons.jsx"
import './Pokedex.css'
export const Pokedex = ()=>{
    const {pokemons} = usePokemons()
    const {filterPokemons} = useFilter()
    const filteredPokemons = filterPokemons(pokemons)
    return <article>
    <Filter/>
   
    <Pokemons pokemons={filteredPokemons}/>
    </article> 
}