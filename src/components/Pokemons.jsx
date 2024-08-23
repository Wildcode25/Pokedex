import { PokemonCard } from './PokemonCard.jsx'
import './Pokemons.css'
export const Pokemons = ({pokemons})=>{
    console.log(pokemons)
    return <article className='pokemonContainer' >
        {
            pokemons?pokemons.map((pokemon, index)=>{
                
                return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon}/>
            }):<div className="load"></div>
        }
    </article>
}