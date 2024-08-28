import { useContext, useEffect, useRef, useState } from "react";
import { PokemonService } from "../service/pokemonService";
import { useFilter } from "../hooks/filter.js";
import { PokemonContext } from "../context/pokemons.jsx";
import { useLoading } from "./useLoading.js";

export const usePokemons = ({setLoading}) => {
  const { pokemons, setPokemons } = useContext(PokemonContext);
  const { filters, filterPokemons } = useFilter();

  const nextRef = useRef("");
  const previousRef = useRef("");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [types, setTypes] = useState(null);

  useEffect(() => {
    PokemonService.getPokemonTypes().then(({ results }) => {
      setTypes(results);
    });
    PokemonService.getPokemons(url).then((data) => {
      previousRef.current = data.previous;
      nextRef.current = data.next;
      setLoading(false);
      setPokemons(data.results);
    });
  }, [url]);
  const getNextPokemons = () => {
    if (nextRef.current) {
      setLoading(true);
      setUrl(nextRef.current);
    }
  };
  const getPreviousPokemons = () => {
    setLoading(true);
    if (previousRef.current) setUrl(previousRef.current);
  };
  
  return {
    pokemons,
    types,
    getNextPokemons,
    getPreviousPokemons,
    setPokemons,
  };
};
