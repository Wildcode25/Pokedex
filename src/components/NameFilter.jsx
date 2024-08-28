import { SearchButton } from "./SearchButton.jsx";
import { useFormData } from "../hooks/formData.js";
import { useFilter } from "../hooks/filter.js";
import { usePokemons } from "../hooks/pokemons.js";
export const NameFilter = ({setLoading})=>{
    const {data} = useFormData()
    const {filterPokemons}=useFilter()
    const {setPokemons} = usePokemons({setLoading})
    const handleFilterByName = async (e) => {
        e.preventDefault();
        setLoading(true)
        const filteredPokemons = await filterPokemons()
        setLoading(false)
        setPokemons(filteredPokemons)
        
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
        <SearchButton handle={handleFilterByName} />
      </label>
    </form>
}