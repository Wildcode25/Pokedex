import { useFilter } from "../hooks/filter.js";
import { useFormData } from "../hooks/formData.js";
import { SearchButton } from "./SearchButton.jsx";
import { TypeFilter } from "./TypeFilter.jsx";
export const Filter = () => {
  const { data } = useFormData();
  const { setFilters } = useFilter();
  const handleFilterByName = (e) => {
    e.preventDefault();

    setFilters((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
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
        height: "360px",
        padding: "10px",
        borderRadius: "20px",
       
      }}
    >
      
      <form>
      <h3>Filter by name: </h3>
        <label htmlFor="pokemonName" >
          <input
          style={{margin: '5px'}}
            value={data.pokemonName}
            onChange={handleFilterByName}
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
