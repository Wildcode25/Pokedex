import { useCallback, useContext, useRef, useState } from "react";
import { FilterContext } from "../context/filter";
import { PokemonService } from "../service/pokemonService.js";
import { baseUrl } from "../utils/const.js";
export const useFilter = () => {
  const pokemons = useRef([]);
  const { filters } = useContext(FilterContext);

  const filterPokemons = useCallback(async () => {
    let newPokemons = []
    if (filters.current.name === "" && filters.current.types.length === 0) {
      const { results } = await PokemonService.getPokemons(baseUrl);
      newPokemons=results
      pokemons.current = results;
    } else if (!pokemons.current || pokemons.current.length<=20) {
      newPokemons = await PokemonService.getAllPokemons();
      pokemons.current = newPokemons;
    }
    else newPokemons = pokemons.current
   
    const filteredPokemons = newPokemons.filter((pokemon) => {
        const types = pokemon.types.map((typeObj) => {
          return typeObj.type.name;
        });
        if (filters.current.name)
          return pokemon.name.includes(filters.current.name);
        return filters.current.types.every((type) => types.includes(type));
      });
      return filteredPokemons;
    
    
  }, []);
  return { filters, filterPokemons };
};
