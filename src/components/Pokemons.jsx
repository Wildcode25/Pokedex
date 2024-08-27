import { useState } from 'react'
import { PokemonCard } from './PokemonCard.jsx'
import './Pokemons.css'
export const Pokemons = ({pokemons})=>{
    const [offset, setOffset] = useState(0)
    console.log(offset)
    return <>
     <div className='buttonContainer'>
     <button  onClick={()=>setOffset(offset-20)}>
            {'<<<'}
        </button>
        <ul className='index'>
            Paginacion
        </ul>
        <button onClick={()=>setOffset(offset+20)}>
            {'>>>'}
        </button>   
    </div>
     <article className='pokemonContainer' >
        {
            
            pokemons?pokemons.slice(offset, offset+16).map((pokemon, index)=>{
                
                return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon}/>
            }):<div className="load"></div>
        }
    </article>
    </>
}