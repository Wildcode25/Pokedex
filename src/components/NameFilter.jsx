import { SearchButton } from "./SearchButton.jsx";
import { useFormData } from "../hooks/formData.js";
import { useFilter } from "../hooks/filter.js";
import { usePokemons } from "../hooks/pokemons.js";
import debounce from "just-debounce-it";
import { useCallback } from "react";
export const NameFilter = ({setLoading})=>{
    const {data} = useFormData()
    const {filterPokemons, filters}=useFilter()
    const {setPokemons} = usePokemons({setLoading})
    const filterByName = async ()=>{
        setLoading(true)
        const filteredPokemons = await filterPokemons()
        setPokemons(filteredPokemons)
        setLoading(false)
    }
    const debouncedFilterByName = useCallback(
        debounce(filterByName, 300)
    , [filterByName])
    const handleFilterByName = (e) => {
        e.preventDefault();
        
        filters.current = {
            name: e.target.value,
            types: []
        }
        debouncedFilterByName()
        
      };
    return <form>
    <h3>Filter by name: </h3>
      <label htmlFor="pokemonName" >
        <input
        style={{margin: '5px'}}
          value={data.pokemonName}
          onChange={handleFilterByName}
          name="pokemonName"
          type="text"
        />
      </label>
    </form>
}