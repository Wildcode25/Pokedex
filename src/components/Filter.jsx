import { useFilter } from "../hooks/filter.js";
import { useFormData } from "../hooks/formData.js";
import { SearchButton } from "./SearchButton.jsx";
import { TypeFilter } from "./TypeFilter.jsx";
export const Filter = () => {
  const { data, handleChange } = useFormData();
  const { setFilters } = useFilter();
  const handleFilterByName = (e) => {
    e.preventDefault();

    setFilters((prevState) => {
      return {
        ...prevState,
        name: data.pokemonName,
      };
    });
    
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        background: "#414446",
        width: "660px",
        height: "350px",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <form>
        <label htmlFor="pokemonName" >
          Name:{" "}
          <input
          style={{margin: '5px'}}
            value={data.pokemonName}
            onChange={handleChange}
            name="pokemonName"
            type="text"
          />
          <SearchButton handle={handleFilterByName} />
        </label>
      </form>
      <TypeFilter />
    </div>
  );
};
