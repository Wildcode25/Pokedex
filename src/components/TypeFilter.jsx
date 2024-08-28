import "../styles/TypeForm.css";
import { usePokemons } from "../hooks/pokemons.js";
import { useFilter } from "../hooks/filter.js";
export const TypeFilter = ({setLoading}) => {
  const { types, setPokemons } = usePokemons({setLoading});
  const {filterPokemons, filters}=useFilter()
  const toggleType = async ({ target }) => {
    setLoading(true)
    const name = target.innerText;

    const inputElement = document.getElementById(target.htmlFor);
    filters.current.name =''
    if (!inputElement.checked) {
      filters.current.types = filters.current.types.concat(name);
    } else {
      filters.current.types = filters.current.types.filter((type) => {
        return type !== name;
      });
    }
    const filteredPokemons = await filterPokemons();
    setLoading(false)
    setPokemons(filteredPokemons)
  };
  return (
    <>
      <div className="formStyle">
        <h3 style={{ width: "100%", margin: "0" }}>Filter by type:</h3>
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
