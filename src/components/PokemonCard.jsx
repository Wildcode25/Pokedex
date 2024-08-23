import axios from "axios";
import { useEffect, useState } from "react";

export const PokemonCard = ({ pokemon }) => {
 
  return (
    
    <div className="pokemonCard">
      <div className="pokemonImage">
        <img src="" alt="" />
      </div>
      <div>
        {}
        <h3>{pokemon.name}</h3>
        <ul className="types">
          {pokemon.types.map(({ type }, index) => {
            return <li key={`type-${index}`}>{type.name}</li>;
          })}
        </ul>
      </div>
    </div>
    
  ) 
};
