import "./TypeForm.css";
import { usePokemons } from "../hooks/pokemons.js";
export const TypeFilter = () => {
  const {types, toggleType} = usePokemons()  
  
  return (
    <>
    <div className="formStyle">
    <h3 style={{width: '100%', margin: '0'
     }}>Filter by type:</h3>
      {types ? (
        types.map((type) => {
          return (
            <div key={type.name}>
              <input
                id={type.name}
                name={type.name}
                type="checkbox"
                style={{ visibility: "hidden" }}
              />
              <label
                onClick={toggleType}
                className="formItemStyle"
                id={type.name}
                htmlFor={type.name}
              >
                {type.name}
              </label>
            </div>
          );
        })
      ) : (
        <div className="load"></div>
      )}
      :
    </div>
    </>
  );
};
