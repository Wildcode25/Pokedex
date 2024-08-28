import { useFilter } from "../hooks/filter.js"
import { usePokemons } from "../hooks/pokemons.js"
import { Filter } from "./Filter.jsx"
import { Pokemons } from "./Pokemons.jsx"
import './Pokedex.css'
import { useLoading } from "../hooks/useLoading.js"
export const Pokedex = ()=>{
    const {loading, setLoading} = useLoading()
    return <article>
    <Filter setLoading={setLoading}/>
    <Pokemons setLoading={setLoading} loading={loading}/>
    </article> 
}