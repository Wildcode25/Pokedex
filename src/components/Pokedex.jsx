import { Filter } from "./Filter.jsx"
import { Pokemons } from "./Pokemons.jsx"
import '../styles/pokedex.css'
import { useLoading } from "../hooks/useLoading.js"
export const Pokedex = ()=>{
    const {loading, setLoading} = useLoading()
    return <article>
    <Filter setLoading={setLoading}/>
    <Pokemons setLoading={setLoading} loading={loading}/>
    </article> 
}