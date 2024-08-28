import { useState } from "react";
import { PokemonCard } from "./PokemonCard.jsx";
import "../styles/Pokemons.css";
import { usePokemons } from "../hooks/pokemons.js";
export const Pokemons = ({loading, setLoading}) => {
  const [offset, setOffset] = useState(0);
  const { pokemons,getPreviousPokemons, getNextPokemons } = usePokemons({setLoading});
  return (
    <>
      <div className="buttonContainer">
        <button onClick={getPreviousPokemons}>{"<<<"}</button>
        <ul className="index">Paginacion</ul>
        <button onClick={getNextPokemons}>{">>>"}</button>
      </div>
      <article className="pokemonContainer">
        {loading ? (
          <div className="load"></div>
        ):(
            pokemons.map((pokemon, index) => {
              return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon} />;
            })
          ) }
      </article>
    </>
  );
};
