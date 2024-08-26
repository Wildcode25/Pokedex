import { useEffect, useState } from "react"
import { PokemonService } from "../service/pokemonService"
import { useFilter } from "../hooks/filter.js";


export const usePokemons = ()=>{
    const { setFilters } = useFilter();
    const [types, setTypes] = useState(null);
    const [pokemons, setPokemons] = useState(null)
    useEffect(()=>{
        PokemonService.getPokemons().then(gettedPokemons=>setPokemons(gettedPokemons))
        PokemonService.getPokemonTypes().then(({ results }) => {
          setTypes(results);
        });
    }, [])
    
    const toggleType = ({ target }) => {
        const name = target.innerText;
    
        const inputElement = document.getElementById(target.htmlFor);
    
        if (!inputElement.checked)
           setFilters((prevState) => {
            return {
              types: prevState.types.concat(name),
            };
          });
        else setFilters((prevState) => {
          const newFilters = {
            types: prevState.types.filter((type) => {
              return type !== name;
            }),
          };
          
          return newFilters
        });
      };
    return {pokemons, types, toggleType}
}